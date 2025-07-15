import { ServerRoute } from '@hapi/hapi'
import { getPlanet, listPlanets } from '../controllers/planetController'
import { basicAuth } from '../middlewares/authMiddleware'

const routes: ServerRoute[] = [
    {
        method: 'GET',
        path: '/api/planets/{id}',
        // options: {
        //     pre: [{ method: basicAuth }]
        // },
        handler: getPlanet
    },
    {
        method: 'GET',
        path: '/api/planets',
        // options: {
        //     pre: [{ method: basicAuth }]
        // },
        handler: listPlanets
    }
]

export default routes