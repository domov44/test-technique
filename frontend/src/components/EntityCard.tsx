import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { LucideArrowLeft } from "lucide-react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";

type Props = {
  title: string;
  fields: { label: string; value: string | number }[];
  category?: string;
};

const CATEGORY_COLORS: Record<string, string> = {
  people: "bg-blue-500 text-white",
  planets: "bg-green-500 text-white",
  species: "bg-purple-500 text-white",
  starships: "bg-yellow-500 text-black",
  vehicles: "bg-red-500 text-white",
};

export function EntityCard({ title, fields, category }: Props) {
  const navigate = useNavigate();

  const badgeClass = category ? CATEGORY_COLORS[category.toLowerCase()] ?? "bg-gray-300 text-black" : null;

  return (
    <Card className="mx-auto mt-12 shadow-l w-full">
      <CardHeader className="flex justify-between items-center">
        <Button
          onClick={() => navigate(-1)}
          type="button"
          variant="link"
          className="cursor-pointer"
        >
          <LucideArrowLeft size={16} />
          Back
        </Button>
        <div className="flex items-center gap-2">
          <CardTitle>{title}</CardTitle>
          {category && (
            <Badge className={badgeClass + " mt-1 px-2 py-0.5 text-sm font-semibold rounded"}>
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </Badge>
          )}
        </div>
      </CardHeader>
      <CardContent className="space-y-2">
        {fields.map((f) => (
          <div key={f.label} className="flex justify-between text-sm">
            <span className="text-muted-foreground">{f.label}</span>
            <span className="font-medium">{f.value}</span>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
