import { useSpeciesQuery } from '@/api/species';
import { useParams } from 'react-router-dom';

export default function SpeciesPage() {
    const { id } = useParams<{ id: string }>();

    if (!id) return <div>ID is missing</div>;

    const { data, isLoading, error } = useSpeciesQuery(id);

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error : {error.message}</div>;
    if (!data) return <div>Species not found</div>;

    return (
        <div>
            <h1>{data.name}</h1>
        </div>
    );
}
