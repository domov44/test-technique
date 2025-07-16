import { Request, ResponseToolkit } from '@hapi/hapi'
import { fetchStarshipById, fetchStarshipsList } from '../services/starshipService'
import { formatStarship, formatStarshipSummary } from '../models/starshipModel'
import { StarshipSummary } from '../interfaces/starship'

export async function getStarship(request: Request, h: ResponseToolkit) {
  const id = request.params.id

  try {
    const rawData = await fetchStarshipById(id)
    const starship = formatStarship(rawData)
    return h.response(starship).code(200)
  } catch (err: any) {
    return h.response({ error: err.message }).code(500)
  }
}

export async function listStarships(request: Request, h: ResponseToolkit) {
  try {
    const dataRaw = await fetchStarshipsList()

    const results: StarshipSummary[] = dataRaw.map(formatStarshipSummary)

    return h.response({
      total: results.length,
      results,
    }).code(200)
  } catch (err: any) {
    return h.response({ error: err.message }).code(500)
  }
}