import { Navigate, Outlet } from 'react-router-dom';

import { APP_ROUTES } from '@/shared/const/router';

export const GuestGuard = () => {
  const isAuthorized = false;

  if (isAuthorized) return <Navigate to={APP_ROUTES.home} />;

  return <Outlet />;
};
