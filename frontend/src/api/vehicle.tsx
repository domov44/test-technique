import { useQuery } from '@tanstack/react-query'
import { useAuth } from '@/contexts/AuthContext'

export interface Vehicle {
    id: string
    name: string
}

export async function getVehicle(id: string, token?: string): Promise<Vehicle> {
    const headers: HeadersInit = {}
    if (token) headers.Authorization = `Basic ${token}`

    const res = await fetch(`/api/vehicles/${id}`, { headers })
    if (!res.ok) throw new Error('Not found')
    return res.json()
}

export function useVehicleQuery(id: string) {
    const { token } = useAuth()

    return useQuery({
        queryKey: ['vehicle', id],
        queryFn: () => getVehicle(id, token ?? undefined),
        enabled: !!id && !!token,
    })
}