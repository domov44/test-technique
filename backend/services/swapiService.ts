import { get } from '../utils/httpClient'
import {
  SwapiPersonResult,
  PeopleListResponse
} from '../types/swapi'

export async function fetchPersonById(id: string): Promise<SwapiPersonResult> {
  const url = `https://swapi.tech/api/people/${id}`
  const response = await get(url)
  return response.result.properties
}

export async function fetchPeopleList(
  page: number = 1,
  limit: number = 10,
  name?: string
): Promise<PeopleListResponse> {
  const url = new URL('https://swapi.tech/api/people')
  url.searchParams.set('page', page.toString())
  url.searchParams.set('limit', limit.toString())
  if (name) url.searchParams.set('name', name)

  const response = await get<PeopleListResponse>(url.toString())
  return response
}
