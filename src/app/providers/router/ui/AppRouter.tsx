import { RouteObject, useRoutes } from 'react-router-dom';

import { AuthGuard, GuestGuard } from '@/entities/Session';
import { LoginPage } from '@/pages/auth';
import { HomePage } from '@/pages/HomePage';
import { NotFoundPage } from '@/pages/NotFoundPage';
import { SearchPage } from '@/pages/SearchPage';
import { APP_ROUTES } from '@/shared/const/router';
import { AuthLayout } from '@/shared/layouts/AuthLayout';
import { MainLayout } from '@/shared/layouts/MainLayout';

const AppRouter = () => {
  const publicRoutes: RouteObject[] = [
    {
      path: '/',
      element: <MainLayout />,
      children: [
        {
          path: APP_ROUTES.home,
          element: <HomePage />,
        },
        {
          path: APP_ROUTES.search,
          element: <SearchPage />,
        },
        {
          path: APP_ROUTES.playlist(':id'),
          element: <div>playlist</div>,
        },
        {
          path: APP_ROUTES.artist(':id'),
          element: <div>artist</div>,
        },
        {
          path: APP_ROUTES.user(':id'),
          element: <div>user</div>,
        },
        {
          path: APP_ROUTES.genre(':id'),
          element: <div>genre</div>,
        },
        {
          path: APP_ROUTES.section(':id'),
          element: <div>section</div>,
        },
      ],
    },
  ];
  const authOnlyRoutes: RouteObject[] = [
    {
      path: '/',
      element: <MainLayout />,
      children: [
        {
          path: APP_ROUTES.collection,
          element: <div>collection</div>,
        },
        {
          path: APP_ROUTES.preferences,
          element: <div>preferences</div>,
        },
      ],
    },
  ];
  const guestOnlyRoutes: RouteObject[] = [
    {
      path: '/auth',
      element: <AuthLayout />,
      children: [
        {
          path: APP_ROUTES.auth.login,
          element: <LoginPage />,
        },
        {
          path: APP_ROUTES.auth.register,
          element: <div>register</div>,
        },
      ],
    },
  ];

  return useRoutes([
    ...publicRoutes,
    {
      path: '/',
      element: <GuestGuard />,
      children: [...guestOnlyRoutes],
    },
    {
      path: '/',
      element: <AuthGuard />,
      children: [...authOnlyRoutes],
    },
    {
      path: '*',
      element: <NotFoundPage />,
    },
  ]);
};

export default AppRouter;
