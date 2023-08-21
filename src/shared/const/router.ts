export const APP_ROUTES = {
  home: '/',
  search: '/search',
  auth: {
    login: '/auth/login',
    register: '/auth/register',
  },
  collection: '/collection',
  preferences: '/preferences',
  playlist: (id: string) => `/playlist/${id}`,
  artist: (id: string) => `/artist/${id}`,
  user: (id: string) => `/user/${id}`,
  forbidden: '/forbidden',
} as const;
