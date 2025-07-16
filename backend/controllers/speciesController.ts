import { Request, ResponseToolkit } from '@hapi/hapi'
import { fetchSpeciesById, fetchSpeciesList } from '../services/speciesService'
import { formatSpecies, formatSpeciesSummary } from '../models/speciesModel'
import { SpeciesSummary } from '../interfaces/species'

export async function getSpecies(request: Request, h: ResponseToolkit) {
  const id = request.params.id

  try {
    const rawData = await fetchSpeciesById(id)
    const species = formatSpecies(rawData)
    return h.response(species).code(200)
  } catch (err: any) {
    return h.response({ error: err.message }).code(500)
  }
}

export async function listSpecies(request: Request, h: ResponseToolkit) {
  try {
    const dataRaw = await fetchSpeciesList()

    const results: SpeciesSummary[] = dataRaw.map(formatSpeciesSummary)

    return h.response({
      total: results.length,
      results,
    }).code(200)
  } catch (err: any) {
    return h.response({ error: err.message }).code(500)
  }
}