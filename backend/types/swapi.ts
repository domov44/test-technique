export interface SwapiPersonResult {
  name: string
  height: string
  mass: string
  gender: string
  birth_year: string
  [key: string]: any
}

export interface SwapiPersonSummary {
  uid: string
  name: string
  url: string
}

export interface SwapiStarshipResult {
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

export interface SwapiStarshipSummary {
  uid: string
  name: string
  url: string
}

export interface SwapiPaginatedResponse<T> {
  message: string
  total_records: number
  total_pages: number
  previous: string | null
  next: string | null
  results: T[]
}