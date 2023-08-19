import React, { FC, ReactNode } from 'react';
import { Navigate } from 'react-router-dom';

import { APP_ROUTES } from '@/shared/const/router';

interface IGuestGuardProps {
  children: ReactNode;
}

export const GuestGuard: FC<IGuestGuardProps> = ({ children }) => {
  const isAuthorized = false;

  if (isAuthorized) return <Navigate to={APP_ROUTES.home} />;

  return children;
};
