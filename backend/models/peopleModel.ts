import { Person } from "../interfaces/person";

export function formatPeople(data: Person) {
  return {
    name: data.name,
    height: data.height,
    mass: data.mass,
    gender: data.gender,
    birth_year: data.birth_year
  }
}