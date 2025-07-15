export interface Person {
  name: string
  height: string
  mass: string
  gender: string
  birth_year: string
  [key: string]: any
}

export interface PersonSummary {
  uid: string
  name: string
  url: string
}