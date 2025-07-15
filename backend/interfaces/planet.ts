export interface Planet {
  name: string
  climate: string
  diameter: string
  gravity: string
  population: string
  terrain: string
  [key: string]: any
}

export interface PlanetSummary {
  uid: string
  name: string
  url: string
}