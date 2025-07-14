import { ServerRoute } from '@hapi/hapi'

const routes: ServerRoute[] = [
    {
        method: 'GET',
        path: '/',
        handler: (request, h) => {
            return h.response({ message: 'Welcome, may the force be with you...' }).code(200)
        }
    },
    {
        method: 'GET',
        path: '/api',
        handler: (request, h) => {
            return h.response("Welcome, may the force be with you...").code(200)
        }
    },
]

export default routes