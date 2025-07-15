import { useQuery } from '@tanstack/react-query';

export interface Starship {
    id: string;
    name: string;
}

export async function getStarship(id: string): Promise<Starship> {
    const res = await fetch(`/api/starship/${id}`);
    if (!res.ok) throw new Error('Not found');
    return res.json();
}

export function useStarshipQuery(id: string) {
    return useQuery({
        queryKey: ['starship', id],
        queryFn: () => getStarship(id),
        enabled: !!id,
    });
}