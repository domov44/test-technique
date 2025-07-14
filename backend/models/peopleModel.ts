import { SwapiPersonResult } from "../types/swapi";

export function formatPerson(data: SwapiPersonResult) {
  return {
    name: data.name,
    height: data.height,
    mass: data.mass,
    gender: data.gender,
    birth_year: data.birth_year
  }
}