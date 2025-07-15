import Hapi from '@hapi/hapi'
import peopleRoutes from './routes/peopleRoutes'
import basicRoutes from './routes/basicRoutes'
import starshipRoutes from './routes/starshipRoutes'
import planetRoutes from './routes/planetRoutes'
import filmRoutes from './routes/filmRoutes'
import vehicleRoutes from './routes/vehicleRoutes'
import speciesRoutes from './routes/speciesRoutes'
import searchRoutes from './routes/searchRoutes'

export async function createServer(): Promise<Hapi.Server> {
  const isRender = process.env.RENDER === 'true'

  const server = Hapi.server({
    port: process.env.PORT ? Number(process.env.PORT) : 3001,
    host: isRender ? '0.0.0.0' : 'localhost',
    routes: {
      cors: { origin: ['*'] }
    }
  })

  server.route([...basicRoutes, ...peopleRoutes, ...starshipRoutes, ...planetRoutes, ...filmRoutes, ...vehicleRoutes, ...speciesRoutes, ...searchRoutes])
  return server
}