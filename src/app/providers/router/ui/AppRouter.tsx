import React, { FC, ReactNode, Suspense, useCallback } from 'react';
import { Route, Routes } from 'react-router-dom';

import { AuthGuard, GuestGuard } from '@/entities/session';
import { AppRouteProps } from '@/shared/types/router';
import { PageLoader } from '@/widgets/PageLoader';

import { routeConfig } from '../config/routerConfig';

const AppRouter = () => {
  const renderWithWrapper = useCallback((route: AppRouteProps) => {
    const element = <Suspense fallback={<PageLoader />}>{route.element}</Suspense>;

    const Guard = ({ children }: { children: ReactNode }) => {
      if (route.authOnly) {
        return <AuthGuard>{children}</AuthGuard>;
      }
      if (route.guestOnly) {
        return <GuestGuard>{children}</GuestGuard>;
      }
      return children;
    };

    return <Route key={route.path} path={route.path} element={<Guard>{element}</Guard>} />;
  }, []);

  return <Routes>{Object.values(routeConfig).map(renderWithWrapper)}</Routes>;
};

export default AppRouter;
