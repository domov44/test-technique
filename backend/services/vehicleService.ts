import { Vehicle, VehicleSummary } from '../interfaces/vehicle'
import { get } from '../utils/httpClient'

export async function fetchVehicleById(id: string): Promise<Vehicle> {
  const url = `https://swapi.info/api/vehicles/${id}`
  return get<Vehicle>(url)
}

export async function fetchVehiclesList(): Promise<VehicleSummary[]> {
  const url = 'https://swapi.info/api/vehicles'
  return get<VehicleSummary[]>(url)
}