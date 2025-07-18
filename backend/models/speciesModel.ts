import { Species, SpeciesSummary } from "../interfaces/species";
import { extractIdFromUrl } from "../utils/urlHelpers";

export function formatSpecies(data: Species) {
    return {
        id: extractIdFromUrl(data.url) || '',
        name: data.name,
        classification: data.classification,
        designation: data.designation,
        average_height: data.average_height,
        skin_colors: data.skin_colors,
        hair_colors: data.hair_colors,
        eye_colors: data.eye_colors,
        average_lifespan: data.average_lifespan,
        language: data.language,
        homeworld: data.homeworld
    }
}

export function formatSpeciesSummary(data: any): SpeciesSummary {
  return {
    id: extractIdFromUrl(data.url) || '',
    name: data.name,
    url: data.url
  }
}