import { Vehicle, VehicleSummary } from "../interfaces/vehicle";
import { extractIdFromUrl } from "../utils/urlHelpers";

export function formatVehicle(data: Vehicle) {
  return {
    name: data.name,
    model: data.model,
    manufacturer: data.manufacturer,
    cost_in_credits: data.cost_in_credits,
    length: data.length,
    crew: data.crew,
    passengers: data.passengers,
    vehicle_class: data.vehicle_class
  }
}

export function formatVehicleSummary(data: any): VehicleSummary {
  return {
    id: extractIdFromUrl(data.url) || '',
    name: data.name,
    url: data.url
  }
}