import { Request, ResponseToolkit } from '@hapi/hapi'
import { fetchStarshipById, fetchStarshipsList } from '../services/starshipService'
import { formatStarship } from '../models/startshipModel'

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
  const page = parseInt(request.query.page) || 1
  const limit = parseInt(request.query.limit) || 10
  const search = request.query.name?.toString()

  try {
    const data = await fetchStarshipsList(page, limit, search)

    return h.response({
      total: data.total_records,
      results: data.results.map(s => ({
        id: s.uid,
        name: s.name
      }))
    }).code(200)
  } catch (err: any) {
    return h.response({ error: err.message }).code(500)
  }
}