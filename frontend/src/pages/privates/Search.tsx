import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useSearchQuery } from "@/api/search";
import { useRef, useEffect, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

type FormValues = {
  search: string;
};

const CATEGORIES_LABELS: Record<string, string> = {
  people: "People",
  planets: "Planets",
  species: "Species",
  starships: "Starships",
  vehicles: "Vehicles"
};

export default function SearchPage() {
  const { register, watch } = useForm<FormValues>({
    defaultValues: { search: "" },
  });
  const searchValue = watch("search");
  const [debouncedValue, setDebouncedValue] = useState("");
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => {
      setDebouncedValue(searchValue || "");
    }, 400);
    return () => {
      if (timer.current) clearTimeout(timer.current);
    };
  }, [searchValue]);

  const { data, isFetching, isError } = useSearchQuery(debouncedValue);

  const hasResults =
    data &&
    Object.values(data).some((arr: any) => Array.isArray(arr) && arr.length > 0);

  const totalResults =
    data
      ? Object.values(data)
        .filter((items) => Array.isArray(items))
        .reduce(
          (sum, items) =>
            sum +
            (items as unknown[]).filter(
              (item): item is { uid: string; name: string; url: string } =>
                typeof item === "object" &&
                !!item &&
                "uid" in item &&
                "name" in item &&
                "url" in item
            ).length,
          0
        )
      : 0;

  return (
    <div style={{ maxWidth: 500, margin: "3rem auto" }}>
      <form autoComplete="off">
        <Input placeholder="Search someting about Star Wars..." {...register("search")} />
      </form>

      {debouncedValue && !isFetching && hasResults && (
        <Card style={{ marginTop: 10 }}>
          <CardHeader>
            <CardTitle>
              {totalResults === 0
                ? "Nothing was found :("
                : `Résult${totalResults > 1 ? "s" : ""} (${totalResults})`}
            </CardTitle>
          </CardHeader>
          <CardContent>
            {Object.entries(data!)
              .filter(([_, items]) => Array.isArray(items) && items.length > 0)
              .map(([category, items], idx, arr) => {
                const results = (items as unknown[]).filter(
                  (item): item is { uid: string; name: string; url: string } =>
                    typeof item === "object" &&
                    !!item &&
                    "uid" in item &&
                    "name" in item &&
                    "url" in item
                );
                if (results.length === 0) return null;

                return (
                  <div key={category} style={{ marginBottom: idx < arr.length - 1 ? 24 : 0 }}>
                    <div style={{ marginBottom: 4, display: "flex", alignItems: "center", gap: 10 }}>
                      <Badge variant="default">{CATEGORIES_LABELS[category] ?? category}</Badge>
                    </div>
                    <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>

                      {results.map(item => (
                        <li key={item.uid} style={{ marginBottom: 4 }}>
                          <Link
                            to={`/${category.toLowerCase()}/${item.uid}`}
                            style={{
                              textDecoration: "none",
                              color: "#333",
                              fontWeight: 500
                            }}
                          >
                            {item.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
          </CardContent>
        </Card>
      )}

      {debouncedValue && isFetching && (
        <Card style={{ marginTop: 10 }}>
          <CardContent style={{ padding: "1em" }}>
            Chargement…
          </CardContent>
        </Card>
      )}

      {debouncedValue && !isFetching && !hasResults && (
        <Card style={{ marginTop: 10 }}>
          <CardContent style={{ padding: "1em" }}>
            {`nothing was found :(`}
          </CardContent>
        </Card>
      )}

      {debouncedValue && isError && (
        <Card style={{ marginTop: 10 }}>
          <CardContent style={{ padding: "1em", color: "red" }}>
            {`oh no ERROR`}
          </CardContent>
        </Card>
      )}
    </div>
  );
}