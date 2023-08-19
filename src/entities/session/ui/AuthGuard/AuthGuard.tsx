import React, { FC, ReactNode } from 'react';
import { Navigate } from 'react-router-dom';

import { APP_ROUTES } from '@/shared/const/router';

interface IAuthGuardProps {
  children: ReactNode;
}

export const AuthGuard: FC<IAuthGuardProps> = ({ children }) => {
  const isAuthorized = false;

  if (!isAuthorized) return <Navigate to={APP_ROUTES.login} />;

  return children;
};
