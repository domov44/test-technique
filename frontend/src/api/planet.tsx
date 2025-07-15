import { useQuery } from '@tanstack/react-query'
import { useAuth } from '@/contexts/AuthContext'

export interface Planet {
  id: string
  name: string
}

export async function getPlanet(id: string, token?: string): Promise<Planet> {
  const headers: HeadersInit = {}
  if (token) headers.Authorization = `Basic ${token}`

  const res = await fetch(`/api/planets/${id}`, { headers })
  if (!res.ok) throw new Error('Not found')
  return res.json()
}

export function usePlanetQuery(id: string) {
  const { token } = useAuth()

  return useQuery({
    queryKey: ['planet', id],
    queryFn: () => getPlanet(id, token ?? undefined),
    enabled: !!id && !!token,
  })
}