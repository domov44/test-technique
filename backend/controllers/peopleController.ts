import { Request, ResponseToolkit } from '@hapi/hapi'
import { fetchPersonById, fetchPeopleList } from '../services/swapiService'
import { formatPerson } from '../models/peopleModel'

export async function getPerson(request: Request, h: ResponseToolkit) {
  const id = request.params.id

  try {
    const rawData = await fetchPersonById(id)
    const person = formatPerson(rawData)
    return h.response(person).code(200)
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
