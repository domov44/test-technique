import { useQuery } from '@tanstack/react-query'
import { useAuth } from '@/contexts/AuthContext'

export async function search(query: string, token?: string): Promise<{ results: string[] }> {
  const headers: HeadersInit = {}
  if (token) headers.Authorization = `Basic ${token}`

  const res = await fetch(`/api/search?q=${encodeURIComponent(query)}`, { headers })
  if (!res.ok) throw new Error('Network error')
  return res.json()
}

export function useSearchQuery(query: string) {
  const { token } = useAuth()

  return useQuery({
    queryKey: ['search', query],
    queryFn: () => search(query, token ?? undefined),
    enabled: !!query && query.length > 0 && !!token,
  })
}