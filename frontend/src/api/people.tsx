import { useQuery } from '@tanstack/react-query'
import { useAuth } from '@/contexts/AuthContext'

export interface Person {
  id: string
  name: string
  gender: string
  height: string
  mass: string
  birth_year: string
}

export async function getPerson(id: string, token?: string): Promise<Person> {
  const headers: HeadersInit = {}
  if (token) headers.Authorization = `Basic ${token}`

  const res = await fetch(`/api/people/${id}`, { headers })
  if (!res.ok) throw new Error('Not found')
  return res.json()
}

export function usePersonQuery(id: string) {
  const { token } = useAuth()

  return useQuery({
    queryKey: ['person', id],
    queryFn: () => getPerson(id, token ?? undefined),
    enabled: !!id && !!token,
  })
}