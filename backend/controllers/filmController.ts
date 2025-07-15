import { Request, ResponseToolkit } from '@hapi/hapi'
import { fetchFilmById, fetchFilmsList } from '../services/filmService'

export async function getFilm(request: Request, h: ResponseToolkit) {
    const id = request.params.id

    try {
        const film = await fetchFilmById(id)
        return h.response(film).code(200)
    } catch (err: any) {
        return h.response({ error: err.message }).code(500)
    }
}

export async function listFilms(request: Request, h: ResponseToolkit) {
    try {
        const data = await fetchFilmsList()

        return h.response({
            total: data.result.length,
            results: data.result.map((f: any) => ({
                id: f.uid,
                title: f.properties.title
            }))
        }).code(200)

    } catch (err: any) {
        return h.response({ error: err.message }).code(500)
    }
}