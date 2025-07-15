import { useQuery } from '@tanstack/react-query'
import { useAuth } from '@/contexts/AuthContext'

export interface Species {
    id: string
    name: string
}

export async function getSpecies(id: string, token?: string): Promise<Species> {
    const headers: HeadersInit = {}
    if (token) headers.Authorization = `Basic ${token}`

    const res = await fetch(`/api/species/${id}`, { headers })
    if (!res.ok) throw new Error('Not found')
    return res.json()
}

export function useSpeciesQuery(id: string) {
    const { token } = useAuth()

    return useQuery({
        queryKey: ['species', id],
        queryFn: () => getSpecies(id, token ?? undefined),
        enabled: !!id && !!token,
    })
}