import { Request, ResponseToolkit } from '@hapi/hapi'
import { fetchVehicleById, fetchVehiclesList } from '../services/vehicleService'
import { formatVehicle, formatVehicleSummary } from '../models/vehicleModel'
import { VehicleSummary } from '../interfaces/vehicle'

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
  try {
    const dataRaw = await fetchVehiclesList()

    const results: VehicleSummary[] = dataRaw.map(formatVehicleSummary)

    return h.response({
      total: results.length,
      results,
    }).code(200)
  } catch (err: any) {
    return h.response({ error: err.message }).code(500)
  }
}