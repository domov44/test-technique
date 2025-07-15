import { ServerRoute } from '@hapi/hapi'
import { getPeople, listPeople } from '../controllers/peopleController'
import { basicAuth } from '../middlewares/authMiddleware'

const routes: ServerRoute[] = [
  {
    method: 'GET',
    path: '/api/people/{id}',
    // options: {
    //   pre: [{ method: basicAuth }]
    // },
    handler: getPeople
  },
  {
    method: 'GET',
    path: '/api/people',
    // options: {
    //   pre: [{ method: basicAuth }]
    // },
    handler: listPeople
  }
]

export default routes