import { useQuery } from '@tanstack/react-query';

export async function search(query: string): Promise<{ results: string[] }> {
  const res = await fetch(`/api/search?q=${encodeURIComponent(query)}`);
  if (!res.ok) throw new Error('Network error');
  return res.json();
}

export function useSearchQuery(query: string) {
  return useQuery({
    queryKey: ['search', query],
    queryFn: () => search(query),
    enabled: !!query && query.length > 0
  });
}