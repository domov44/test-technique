import { get } from '../utils/httpClient'
import {
  SwapiPaginatedResponse,
} from '../types/swapi'
import { Person, PersonSummary } from '../interfaces/person'

export async function fetchPeopleById(id: string): Promise<Person> {
  const url = `https://swapi.tech/api/people/${id}`
  const response = await get(url)
  return response.result.properties
}

export async function fetchPeopleList(
  page = 1,
  limit = 10,
  name?: string
): Promise<SwapiPaginatedResponse<PersonSummary>> {
  const url = new URL('https://swapi.tech/api/people')
  url.searchParams.set('page', page.toString())
  url.searchParams.set('limit', limit.toString())
  if (name) url.searchParams.set('name', name)

  return get<SwapiPaginatedResponse<PersonSummary>>(url.toString())
}