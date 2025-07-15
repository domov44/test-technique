import { Species, SpeciesSummary } from '../interfaces/species'
import { SwapiPaginatedResponse } from '../types/swapi'
import { get } from '../utils/httpClient'

export async function fetchSpeciesById(id: string): Promise<Species> {
    const url = `https://swapi.tech/api/species/${id}`
    const response = await get(url)
    return response.result.properties
}

export async function fetchSpeciesList(
    page: number = 1,
    limit: number = 10,
    name?: string
): Promise<SwapiPaginatedResponse<SpeciesSummary>> {
    const url = new URL('https://swapi.tech/api/species')
    url.searchParams.set('page', page.toString())
    url.searchParams.set('limit', limit.toString())
    if (name) url.searchParams.set('name', name)

    const response = await get<SwapiPaginatedResponse<SpeciesSummary>>(url.toString())
    return response
}