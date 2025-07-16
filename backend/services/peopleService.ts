import { get } from '../utils/httpClient'
import { Person, PersonSummary } from '../interfaces/person'

export async function fetchPeopleById(id: string): Promise<Person> {
  const url = `https://swapi.info/api/people/${id}`
  return get<Person>(url)
}

export async function fetchPeopleList(): Promise<PersonSummary[]> {
  const url = 'https://swapi.info/api/people'
  return get<PersonSummary[]>(url)
}