export interface Vehicle {
  name: string
  model: string
  manufacturer: string
  cost_in_credits: string
  length: string
  crew: string
  passengers: string
  vehicle_class: string
  [key: string]: any
}

export interface VehicleSummary {
  uid: string
  name: string
  url: string
}