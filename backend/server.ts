import Hapi from '@hapi/hapi'
import peopleRoutes from './routes/peopleRoutes'
import basicRoutes from './routes/basicRoutes'
import starshipRoutes from './routes/starshipRoutes'
import planetRoutes from './routes/planetRoutes'
import filmRoutes from './routes/filmRoutes'
import vehicleRoutes from './routes/vehicleRoutes'
import speciesRoutes from './routes/speciesRoutes'

export async function createServer(): Promise<Hapi.Server> {
  const server = Hapi.server({
    port: 3001,
    host: 'localhost',
    routes: {
      cors: { origin: ['*'] }
    }
  })

  server.route([...basicRoutes, ...peopleRoutes, ...starshipRoutes, ...planetRoutes, ...filmRoutes, ...vehicleRoutes, ...speciesRoutes])
  return server
}