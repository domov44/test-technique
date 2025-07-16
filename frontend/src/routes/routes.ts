export const ROUTES = {
  // Public routes
  LOGIN: '/login',

  // Private routes
  HOME: '/',
  ENTITY_DETAIL: (category: string, id: string) => `/${category}/${id}`,

  // Error routes
  NOT_FOUND: '*',
};