import { HomePage } from '@/pages/HomePage';
import { APP_ROUTES } from '@/shared/const/router';
import { AppRouteProps, AppRoutes } from '@/shared/types/router';

export const routeConfig: Record<AppRoutes, AppRouteProps> = {
  home: {
    path: APP_ROUTES.home,
    element: <HomePage />,
  },
  search: {
    path: APP_ROUTES.search,
    element: <div>search</div>,
  },
  login: {
    path: APP_ROUTES.login,
    element: <div>login</div>,
    guestOnly: true,
  },
  register: {
    path: APP_ROUTES.register,
    element: <div>register</div>,
    guestOnly: true,
  },
  collection: {
    path: APP_ROUTES.collection,
    element: <div>collection</div>,
    authOnly: true,
  },
  preferences: {
    path: APP_ROUTES.preferences,
    element: <div>preferences</div>,
    authOnly: true,
  },
  playlist: {
    path: APP_ROUTES.playlist(':id'),
    element: <div>playlist</div>,
  },
  artist: {
    path: APP_ROUTES.artist(':id'),
    element: <div>artist</div>,
  },
  user: {
    path: APP_ROUTES.user(':id'),
    element: <div>user</div>,
  },

  // last route
  not_found: {
    path: '*',
    element: <div>not found</div>,
  },
};
