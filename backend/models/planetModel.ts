import { Planet, PlanetSummary } from '../interfaces/planet'
import { extractIdFromUrl } from '../utils/urlHelpers'

export function formatPlanet(data: any): Planet {
  return {
    id: extractIdFromUrl(data.url) || '',
    name: data.name,
    climate: data.climate,
    diameter: data.diameter,
    gravity: data.gravity,
    population: data.population,
    terrain: data.terrain,
  }
}

export function formatPlanetSummary(data: any): PlanetSummary {
  return {
    id: extractIdFromUrl(data.url) || '',
    name: data.name,
    url: data.url
  }
}