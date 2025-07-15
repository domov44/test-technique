import { useQuery } from '@tanstack/react-query';

export interface Vehicle {
    id: string;
    name: string;
}

export async function getVehicle(id: string): Promise<Vehicle> {
    const res = await fetch(`/api/vehicles/${id}`);
    if (!res.ok) throw new Error('Not found');
    return res.json();
}

export function useVehicleQuery(id: string) {
    return useQuery({
        queryKey: ['vehicle', id],
        queryFn: () => getVehicle(id),
        enabled: !!id,
    });
}