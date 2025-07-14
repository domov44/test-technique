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

export interface PeopleListResponse {
  total: number
  results: SwapiPersonSummary[]
}