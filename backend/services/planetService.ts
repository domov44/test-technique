import { Planet, PlanetSummary } from "../interfaces/planet"
import { get } from "../utils/httpClient"

export async function fetchPlanetById(id: string): Promise<Planet> {
  const url = `https://swapi.info/api/planets/${id}`
  return get<Planet>(url)
}

export async function fetchPlanetsList(): Promise<PlanetSummary[]> {
  const url = 'https://swapi.info/api/planets'
  return get<PlanetSummary[]>(url)
}