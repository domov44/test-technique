import { Starship, StarshipSummary } from "../interfaces/starship";
import { extractIdFromUrl } from "../utils/urlHelpers";

export function formatStarship(data: Starship) {
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

export function formatStarshipSummary(data: any): StarshipSummary {
  return {
    id: extractIdFromUrl(data.url) || '',
    name: data.name,
    url: data.url
  }
}