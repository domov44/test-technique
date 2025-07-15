import { Request, ResponseToolkit } from '@hapi/hapi'
import { fetchPeopleById, fetchPeopleList } from '../services/peopleService'
import { formatPeople } from '../models/peopleModel'

export async function getPeople(request: Request, h: ResponseToolkit) {
  const id = request.params.id

  try {
    const rawData = await fetchPeopleById(id)
    const people = formatPeople(rawData)
    return h.response(people).code(200)
  } catch (err: any) {
    return h.response({ error: err.message }).code(500)
  }
}

export async function listPeople(request: Request, h: ResponseToolkit) {
  const page = parseInt(request.query.page) || 1
  const limit = parseInt(request.query.limit) || 10
  const search = request.query.name?.toString()

  try {
    const data = await fetchPeopleList(page, limit, search)

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
