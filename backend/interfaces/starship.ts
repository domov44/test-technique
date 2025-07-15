export interface Starship {
  name: string
  model: string
  manufacturer: string
  cost_in_credits: string
  length: string
  crew: string
  passengers: string
  starship_class: string
  [key: string]: any
}

export interface StarshipSummary {
  uid: string
  name: string
  url: string
}