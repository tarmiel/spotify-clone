import { RouteProps } from 'react-router-dom';

import { APP_ROUTES } from '../const/router';

export type AppRoutes = keyof typeof APP_ROUTES;

type Role = 'USER' | 'ARTIST';

export type AppRouteProps = RouteProps & { authOnly?: boolean; guestOnly?: boolean; roles?: Role[] };
