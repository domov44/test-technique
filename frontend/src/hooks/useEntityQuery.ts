import { usePersonQuery } from '@/api/people';
import { usePlanetQuery } from '@/api/planet';
import { useSpeciesQuery } from '@/api/species';
import { useStarshipQuery } from '@/api/starship';
import { useVehicleQuery } from '@/api/vehicle';

export function useEntityQuery(type: string, id: string) {
    switch (type) {
        case 'people':
            return usePersonQuery(id);
        case 'planets':
            return usePlanetQuery(id);
        case 'species':
            return useSpeciesQuery(id);
        case 'starships':
            return useStarshipQuery(id);
        case 'vehicles':
            return useVehicleQuery(id);
        default:
            throw new Error(`Unknown entity type: ${type}`);
    }
}