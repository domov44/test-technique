import { Starship } from "../interfaces/starship";

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