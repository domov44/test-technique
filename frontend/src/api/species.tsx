import { useQuery } from '@tanstack/react-query';

export interface Species {
    id: string;
    name: string;
}

export async function getSpecies(id: string): Promise<Species> {
    const res = await fetch(`/api/species/${id}`);
    if (!res.ok) throw new Error('Not found');
    return res.json();
}

export function useSpeciesQuery(id: string) {
    return useQuery({
        queryKey: ['species', id],
        queryFn: () => getSpecies(id),
        enabled: !!id,
    });
}