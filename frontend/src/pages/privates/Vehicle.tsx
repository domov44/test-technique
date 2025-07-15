import { useVehicleQuery } from "@/api/vehicle";
import { useParams } from 'react-router-dom';

export default function VehiclePage() {
    const { id } = useParams<{ id: string }>();

    if (!id) return <div>ID is missing</div>;

    const { data, isLoading, error } = useVehicleQuery(id);

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error : {error.message}</div>;
    if (!data) return <div>Vehicle not found</div>;

    return (
        <div>
            <h1>{data.name}</h1>
        </div>
    );
}