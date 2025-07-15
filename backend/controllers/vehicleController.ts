import { Request, ResponseToolkit } from '@hapi/hapi'
import { formatVehicle } from '../models/vehicleModel'
import { fetchVehicleById, fetchVehiclesList } from '../services/vehicleService'

export async function getVehicle(request: Request, h: ResponseToolkit) {
  const id = request.params.id

  try {
    const rawData = await fetchVehicleById(id)
    const vehicle = formatVehicle(rawData)
    return h.response(vehicle).code(200)
  } catch (err: any) {
    return h.response({ error: err.message }).code(500)
  }
}

export async function listVehicles(request: Request, h: ResponseToolkit) {
  const page = parseInt(request.query.page) || 1
  const limit = parseInt(request.query.limit) || 10
  const search = request.query.name?.toString()

  try {
    const data = await fetchVehiclesList(page, limit, search)

    return h.response({
      total: data.total_records,
      results: data.results.map(v => ({
        id: v.uid,
        name: v.name
      }))
    }).code(200)

  } catch (err: any) {
    return h.response({ error: err.message }).code(500)
  }
}
