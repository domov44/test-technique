import { ServerRoute } from '@hapi/hapi'

const routes: ServerRoute[] = [
  {
    method: 'GET',
    path: '/',
    handler: (request, h) => {
      return h.response({ message: "Welcome, young Padawan. The Force is strong here." }).code(200)
    }
  },
  {
    method: 'GET',
    path: '/api',
    handler: (request, h) => {
      return h.response({
        message: "This is your Star Wars API base. Choose your destiny:",
        resources: [
          "/api/people",
          "/api/starships",
          "/api/planets",
          "/api/films",
          "/api/vehicles",
          "/api/species"
        ]
      }).code(200)
    }
  }
]

export default routes
