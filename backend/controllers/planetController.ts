import { Request, ResponseToolkit } from '@hapi/hapi'
import { fetchPlanetById, fetchPlanetsList } from '../services/planetService'

export async function getPlanet(request: Request, h: ResponseToolkit) {
  const id = request.params.id

  try {
    const planet = await fetchPlanetById(id)
    return h.response(planet).code(200)
  } catch (err: any) {
    return h.response({ error: err.message }).code(500)
  }
}

export async function listPlanets(request: Request, h: ResponseToolkit) {
  const page = parseInt(request.query.page) || 1
  const limit = parseInt(request.query.limit) || 10
  const search = request.query.name?.toString()

  try {
    const data = await fetchPlanetsList(page, limit, search)

    return h.response({
      total: data.total_records,
      results: data.results.map(p => ({
        id: p.uid,
        name: p.name
      }))
    }).code(200)

  } catch (err: any) {
    return h.response({ error: err.message }).code(500)
  }
}
