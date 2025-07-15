import { ServerRoute } from '@hapi/hapi'
import { getVehicle, listVehicles } from '../controllers/vehicleController'
import { basicAuth } from '../middlewares/authMiddleware'

const vehicleRoutes: ServerRoute[] = [
  {
    method: 'GET',
    path: '/api/vehicles/{id}',
    // options: {
    //   pre: [{ method: basicAuth }]
    // },
    handler: getVehicle
  },
  {
    method: 'GET',
    path: '/api/vehicles',
    // options: {
    //   pre: [{ method: basicAuth }]
    // },
    handler: listVehicles
  }
]

export default vehicleRoutes