import { ServerRoute } from '@hapi/hapi'
import { getPerson, listPeople } from '../controllers/peopleController'

const routes: ServerRoute[] = [
  {
    method: 'GET',
    path: '/api/people/{id}',
    handler: getPerson
  },
  {
    method: 'GET',
    path: '/api/people',
    handler: listPeople
  }
]

export default routes