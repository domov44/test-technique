import { get } from '../utils/httpClient'
import { SwapiPaginatedResponse } from '../types/swapi'
import { Film, FilmSummary } from '../interfaces/film'

export async function fetchFilmById(id: string): Promise<Film> {
  const url = `https://swapi.tech/api/films/${id}`
  const response = await get(url)
  return response.result.properties
}

export async function fetchFilmsList(): Promise<SwapiPaginatedResponse<FilmSummary>> {
  const url = new URL('https://swapi.tech/api/films')
  const response = await get<{ message: string; result: FilmSummary[] }>(url.toString())

  return {
    message: response.message,
    total_records: response.result.length,
    total_pages: 1,
    previous: null,
    next: null,
    results: response.result
  }
}