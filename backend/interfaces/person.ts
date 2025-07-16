export interface Person {
  id: string
  name: string
  height: string
  mass: string
  gender: string
  birth_year: string
  [key: string]: any
}

export interface PersonSummary {
  id: string
  name: string
  url: string
}