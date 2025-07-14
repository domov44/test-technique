import { ServerRoute } from '@hapi/hapi'
import { basicAuth } from '../middlewares/authMiddleware'
import { getStarship, listStarships } from '../controllers/startshipController'

const routes: ServerRoute[] = [
  {
    method: 'GET',
    path: '/api/starship/{id}',
    options: {
      pre: [{ method: basicAuth }]
    },
    handler: getStarship
  },
  {
    method: 'GET',
    path: '/api/starship',
    options: {
      pre: [{ method: basicAuth }]
    },
    handler: listStarships
  }
]

export default routes