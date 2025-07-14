import { SwapiStarshipResult } from '../types/swapi'

export function formatStarship(data: SwapiStarshipResult) {
  return {
    name: data.name,
    model: data.model,
    manufacturer: data.manufacturer,
    cost_in_credits: data.cost_in_credits,
    length: data.length,
    crew: data.crew,
    passengers: data.passengers,
    starship_class: data.starship_class
  }
}