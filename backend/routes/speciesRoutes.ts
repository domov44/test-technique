import { ServerRoute } from '@hapi/hapi'
import { getSpecies, listSpecies } from '../controllers/speciesController'
import { basicAuth } from '../middlewares/authMiddleware'

const speciesRoutes: ServerRoute[] = [
    {
        method: 'GET',
        path: '/api/species/{id}',
        options: {
            pre: [{ method: basicAuth }]
        },
        handler: getSpecies
    },
    {
        method: 'GET',
        path: '/api/species',
        options: {
            pre: [{ method: basicAuth }]
        },
        handler: listSpecies
    }
]

export default speciesRoutes
