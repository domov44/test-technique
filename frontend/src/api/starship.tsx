import { useQuery } from '@tanstack/react-query'
import { useAuth } from '@/contexts/AuthContext'

export interface Starship {
    id: string
    name: string
}

export async function getStarship(id: string, token?: string): Promise<Starship> {
    const headers: HeadersInit = {}
    if (token) headers.Authorization = `Basic ${token}`

    const res = await fetch(`/api/starship/${id}`, { headers })
    if (!res.ok) throw new Error('Not found')
    return res.json()
}

export function useStarshipQuery(id: string) {
    const { token } = useAuth()

    return useQuery({
        queryKey: ['starship', id],
        queryFn: () => getStarship(id, token ?? undefined),
        enabled: !!id && !!token,
    })
}