export const APP_ROUTES = {
  home: '/',
  search: '/search',
  login: '/login',
  register: '/register',
  collection: '/collection',
  preferences: '/preferences',
  playlist: (id: string) => `/playlist/${id}`,
  artist: (id: string) => `/artist/${id}`,
  user: (id: string) => `/user/${id}`,
  not_found: '/forbidden',
} as const;
