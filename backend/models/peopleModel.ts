import { Person, PersonSummary } from "../interfaces/person";
import { extractIdFromUrl } from '../utils/urlHelpers'

export function formatPeople(data: Person) {
  return {
    id: extractIdFromUrl(data.url) || undefined,
    name: data.name,
    height: data.height,
    mass: data.mass,
    gender: data.gender,
    birth_year: data.birth_year
  }
}

export function formatPersonSummary(data: any): PersonSummary {
  return {
    id: extractIdFromUrl(data.url) || '',
    name: data.name,
    url: data.url
  };
}