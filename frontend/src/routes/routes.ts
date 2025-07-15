export const ROUTES = {
  // Private routes
  HOME: '/',
  PERSON_DETAIL: (id:string) => `/people/${id}`,
  PLANET_DETAIL: (id:string) => `/planets/${id}`,
  SPECIES_DETAIL: (id:string) => `/species/${id}`,
  STARSHIP_DETAIL: (id:string) => `/starships/${id}`,
  VEHICLE_DETAIL: (id:string) => `/vehicles/${id}`,

  // Error routes 
  NOT_FOUND: '*',
};