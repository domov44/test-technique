import { ServerRoute } from '@hapi/hapi'
import { globalSearch } from '../controllers/searchController'
import { basicAuth } from '../middlewares/authMiddleware'

const routes: ServerRoute[] = [
  {
    method: 'GET',
    path: '/api/search',
    options: {
      pre: [{ method: basicAuth }]
    },
    handler: globalSearch
  }
]

export default routes