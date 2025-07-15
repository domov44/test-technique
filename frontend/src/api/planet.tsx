import { useQuery } from '@tanstack/react-query';

export interface Planet {
  id: string;
  name: string;
}

export async function getPlanet(id: string): Promise<Planet> {
  const res = await fetch(`/api/planets/${id}`);
  if (!res.ok) throw new Error('Not found');
  return res.json();
}

export function usePlanetQuery(id: string) {
  return useQuery({
    queryKey: ['planet', id],
    queryFn: () => getPlanet(id),
    enabled: !!id,
  });
}