import { Navigate, Outlet } from 'react-router-dom';

import { APP_ROUTES } from '@/shared/const/router';

export const AuthGuard = () => {
  const isAuthorized = false;

  if (!isAuthorized) return <Navigate to={APP_ROUTES.auth.login} />;

  return <Outlet />;
};
