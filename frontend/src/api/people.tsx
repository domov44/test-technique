import { useQuery } from '@tanstack/react-query';

export interface Person {
  id: string;
  name: string;
  gender: string;
  height: string;
  mass: string;
  birth_year: string;
}

export async function getPerson(id: string): Promise<Person> {
  const res = await fetch(`/api/people/${id}`);
  if (!res.ok) throw new Error('Not found');
  return res.json();
}

export function usePersonQuery(id: string) {
  return useQuery({
    queryKey: ['person', id],
    queryFn: () => getPerson(id),
    enabled: !!id,
  });
}