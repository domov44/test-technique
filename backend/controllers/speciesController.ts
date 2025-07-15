import { Request, ResponseToolkit } from '@hapi/hapi'
import { fetchSpeciesById, fetchSpeciesList } from '../services/speciesService'
import { formatSpecies } from '../models/speciesModel'

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
    const page = parseInt(request.query.page) || 1
    const limit = parseInt(request.query.limit) || 10
    const search = request.query.name?.toString()

    try {
        const data = await fetchSpeciesList(page, limit, search)

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
