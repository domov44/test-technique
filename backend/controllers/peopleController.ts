import { Request, ResponseToolkit } from '@hapi/hapi'
import { fetchPeopleById, fetchPeopleList } from '../services/peopleService'
import { formatPeople, formatPersonSummary } from '../models/peopleModel'
import { PersonSummary } from '../interfaces/person'

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
  try {
    const dataRaw = await fetchPeopleList()

    const results: PersonSummary[] = dataRaw.map(formatPersonSummary)

    return h.response({
      total: results.length,
      results,
    }).code(200)

  } catch (err: any) {
    return h.response({ error: err.message }).code(500)
  }
}