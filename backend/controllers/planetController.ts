import { Request, ResponseToolkit } from '@hapi/hapi'
import { fetchPlanetById, fetchPlanetsList } from '../services/planetService'
import { formatPlanet, formatPlanetSummary } from '../models/planetModel'
import { PlanetSummary } from '../interfaces/planet'

export async function getPlanet(request: Request, h: ResponseToolkit) {
  const id = request.params.id

  try {
    const rawData = await fetchPlanetById(id)
    const planet = formatPlanet(rawData)
    return h.response(planet).code(200)
  } catch (err: any) {
    return h.response({ error: err.message }).code(500)
  }
}

export async function listPlanets(request: Request, h: ResponseToolkit) {
  try {
    const dataRaw = await fetchPlanetsList()

    const results: PlanetSummary[] = dataRaw.map(formatPlanetSummary)

    return h.response({
      total: results.length,
      results,
    }).code(200)
  } catch (err: any) {
    return h.response({ error: err.message }).code(500)
  }
}