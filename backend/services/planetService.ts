import { Planet, PlanetSummary } from "../interfaces/planet"
import { SwapiPaginatedResponse } from "../types/swapi"
import { get } from "../utils/httpClient"

export async function fetchPlanetById(id: string): Promise<Planet> {
  const url = `https://swapi.tech/api/planets/${id}`
  const response = await get(url)
  return response.result.properties
}

export async function fetchPlanetsList(
  page: number = 1,
  limit: number = 10,
  name?: string
): Promise<SwapiPaginatedResponse<PlanetSummary>> {
  const url = new URL('https://swapi.tech/api/planets')
  url.searchParams.set('page', page.toString())
  url.searchParams.set('limit', limit.toString())
  if (name) url.searchParams.set('name', name)

  const response = await get<SwapiPaginatedResponse<PlanetSummary>>(url.toString())
  return response
}