import { get } from '../utils/httpClient'
import {
  SwapiPaginatedResponse,
} from '../types/swapi'
import { Starship, StarshipSummary } from '../interfaces/starship'

export async function fetchStarshipById(id: string): Promise<Starship> {
  const url = `https://swapi.tech/api/starships/${id}`
  const response = await get(url)
  return response.result.properties
}

export async function fetchStarshipsList(
  page = 1,
  limit = 10,
  name?: string
): Promise<SwapiPaginatedResponse<StarshipSummary>> {
  const url = new URL('https://swapi.tech/api/starships')
  url.searchParams.set('page', page.toString())
  url.searchParams.set('limit', limit.toString())
  if (name) url.searchParams.set('name', name)

  return get<SwapiPaginatedResponse<StarshipSummary>>(url.toString())
}