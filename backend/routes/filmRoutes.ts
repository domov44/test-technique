import { ServerRoute } from '@hapi/hapi'
import { getFilm, listFilms } from '../controllers/filmController'
import { basicAuth } from '../middlewares/authMiddleware'

const filmRoutes: ServerRoute[] = [
  {
    method: 'GET',
    path: '/api/films/{id}',
    options: {
      pre: [{ method: basicAuth }]
    },
    handler: getFilm
  },
  {
    method: 'GET',
    path: '/api/films',
    options: {
      pre: [{ method: basicAuth }]
    },
    handler: listFilms
  }
]

export default filmRoutes
