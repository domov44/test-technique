import { get } from '../utils/httpClient'
import { Starship, StarshipSummary } from '../interfaces/starship'

export async function fetchStarshipById(id: string): Promise<Starship> {
  const url = `https://swapi.info/api/starships/${id}`
  return get<Starship>(url)
}

export async function fetchStarshipsList(): Promise<StarshipSummary[]> {
  const url = 'https://swapi.info/api/starships'
  return get<StarshipSummary[]>(url)
}