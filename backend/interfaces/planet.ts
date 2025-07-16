export interface Planet {
  id: string
  name: string
  climate: string
  diameter: string
  gravity: string
  population: string
  terrain: string
  [key: string]: any
}

export interface PlanetSummary {
  id: string
  name: string
  url: string
}