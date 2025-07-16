import { Species, SpeciesSummary } from '../interfaces/species'
import { get } from '../utils/httpClient'

export async function fetchSpeciesById(id: string): Promise<Species> {
  const url = `https://swapi.info/api/species/${id}`
  return get<Species>(url)
}

export async function fetchSpeciesList(): Promise<SpeciesSummary[]> {
  const url = 'https://swapi.info/api/species'
  return get<SpeciesSummary[]>(url)
}