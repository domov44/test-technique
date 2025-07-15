import { Vehicle, VehicleSummary } from '../interfaces/vehicle'
import {
  SwapiPaginatedResponse
} from '../types/swapi'
import { get } from '../utils/httpClient'

export async function fetchVehicleById(id: string): Promise<Vehicle> {
  const url = `https://swapi.tech/api/vehicles/${id}`
  const response = await get(url)
  return response.result.properties
}

export async function fetchVehiclesList(
  page: number = 1,
  limit: number = 10,
  name?: string
): Promise<SwapiPaginatedResponse<VehicleSummary>> {
  const url = new URL('https://swapi.tech/api/vehicles')
  url.searchParams.set('page', page.toString())
  url.searchParams.set('limit', limit.toString())
  if (name) url.searchParams.set('name', name)

  const response = await get<SwapiPaginatedResponse<VehicleSummary>>(url.toString())
  return response
}
