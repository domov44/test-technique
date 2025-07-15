import { useParams } from 'react-router-dom';
import { usePersonQuery } from '@/api/people';

export default function PersonPage() {
    const { id } = useParams<{ id: string }>();

    if (!id) return <div>ID is missing</div>;

    const { data, isLoading, error } = usePersonQuery(id);

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error : {error.message}</div>;
    if (!data) return <div>Person not found</div>;

    return (
        <div>
            <h1>{data.name}</h1>
            <p>Gender : {data.gender}</p>
            <p>Mass : {data.mass}</p>
            <p>Height : {data.height}</p>
            <p>Birth year : {data.birth_year}</p>
        </div>
    );
}
