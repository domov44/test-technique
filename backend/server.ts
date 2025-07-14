import Hapi from '@hapi/hapi'
import peopleRoutes from './routes/peopleRoutes'

export async function createServer(): Promise<Hapi.Server> {
  const server = Hapi.server({
    port: 3001,
    host: 'localhost',
    routes: {
      cors: { origin: ['*'] }
    }
  })

  server.route(peopleRoutes)
  return server
}