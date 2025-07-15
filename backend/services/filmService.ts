import { get } from '../utils/httpClient'
import {
} from '../types/swapi'
import { Film, FilmSummary } from '../interfaces/film'

export async function fetchFilmById(id: string): Promise<Film> {
  const url = `https://swapi.tech/api/films/${id}`
  const response = await get(url)
  return response.result.properties
}

export async function fetchFilmsList(): Promise<{ result: FilmSummary[] }> {
  const url = new URL('https://swapi.tech/api/films')
  const response = await get<{ result: FilmSummary[] }>(url.toString())
  return response
}
