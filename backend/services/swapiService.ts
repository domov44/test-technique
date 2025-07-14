import { get } from '../utils/httpClient'
import {
  SwapiPersonResult,
  SwapiPaginatedResponse,
  SwapiPersonSummary,
  SwapiStarshipResult,
  SwapiStarshipSummary
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
): Promise<SwapiPaginatedResponse<SwapiPersonSummary>> {
  const url = new URL('https://swapi.tech/api/people')
  url.searchParams.set('page', page.toString())
  url.searchParams.set('limit', limit.toString())
  if (name) url.searchParams.set('name', name)

  const response = await get<SwapiPaginatedResponse<SwapiPersonSummary>>(url.toString())
  return response
}

export async function fetchStarshipById(id: string): Promise<SwapiStarshipResult> {
  const url = `https://swapi.tech/api/starships/${id}`
  const response = await get(url)
  return response.result.properties
}

export async function fetchStarshipsList(
  page: number = 1,
  limit: number = 10,
  name?: string
): Promise<SwapiPaginatedResponse<SwapiStarshipSummary>> {
  const url = new URL('https://swapi.tech/api/starships')
  url.searchParams.set('page', page.toString())
  url.searchParams.set('limit', limit.toString())
  if (name) url.searchParams.set('name', name)

  const response = await get<SwapiPaginatedResponse<SwapiStarshipSummary>>(url.toString())
  return response
}