export interface Film {
  title: string
  episode_id: number
  opening_crawl: string
  director: string
  producer: string
  release_date: string
  characters: string[]
  planets: string[]
  starships: string[]
  vehicles: string[]
  species: string[]
  [key: string]: any
}

export interface FilmSummary {
  uid: string
  title: string
  url: string
}