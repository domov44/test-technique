import { useParams } from "react-router-dom";
import { useEntityQuery } from "@/hooks/useEntityQuery";
import { EntityLayout } from "@/components/EntityLayout";
import { EntityCard } from "@/components/EntityCard";

const FIELD_MAPPINGS: Record<string, (data: any) => { label: string; value: string | number }[]> = {
    people: (data) => [
        { label: "Gender", value: data.gender },
        { label: "Mass", value: data.mass },
        { label: "Height", value: data.height },
        { label: "Birth Year", value: data.birth_year },
    ],
    planets: (data) => [
        { label: "Climate", value: data.climate },
        { label: "Population", value: data.population },
        { label: "Terrain", value: data.terrain },
    ],
    vehicles: (data) => [
        { label: "Model", value: data.model },
        { label: "Manufacturer", value: data.manufacturer },
        { label: "Crew", value: data.crew },
    ],
    starships: (data) => [
        { label: "Model", value: data.model },
        { label: "Hyperdrive Rating", value: data.hyperdrive_rating },
        { label: "Crew", value: data.crew },
    ],
    species: (data) => [
        { label: "Classification", value: data.classification },
        { label: "Language", value: data.language },
        { label: "Average Lifespan", value: data.average_lifespan },
    ],
};

export default function EntityPage() {
    const { id, category } = useParams<{ id: string; category: string }>();

    if (!id || !category) return <div className="text-center mt-10">Missing params</div>;

    const { data, isLoading, error } = useEntityQuery(category, id);
    const fields = data && FIELD_MAPPINGS[category]?.(data);

    return (
        <EntityLayout isLoading={isLoading} error={error} data={data}>
            {data && (
                <EntityCard title={data.name} fields={fields ?? []} />
            )}
        </EntityLayout>
    );
}