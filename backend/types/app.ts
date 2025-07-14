import { SwapiPersonSummary } from './swapi'

export interface PaginatedPeopleResult {
  total: number
  next: string | null
  previous: string | null
  results: SwapiPersonSummary[]
}