export interface Starship {
  id: string
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
  id: string
  name: string
  url: string
}