export interface Species {
  id: string
  name: string
  classification: string
  designation: string
  average_height: string
  skin_colors: string
  hair_colors: string
  eye_colors: string
  average_lifespan: string
  language: string
  [key: string]: any
}

export interface SpeciesSummary {
  id: string
  name: string
  url: string
}