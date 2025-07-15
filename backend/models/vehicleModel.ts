import { Vehicle } from "../interfaces/vehicle";

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