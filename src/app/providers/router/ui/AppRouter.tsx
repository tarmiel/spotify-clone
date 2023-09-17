import { Navigate, RouteObject, useRoutes } from 'react-router-dom';

import { AuthGuard, GuestGuard } from '@/entities/Session';
import { LoginPage } from '@/pages/auth';
import { RegisterPage } from '@/pages/auth';
import { HomePage } from '@/pages/HomePage';
import { NotFoundPage } from '@/pages/NotFoundPage';
import { PlaylistPage } from '@/pages/PlaylistPage';
import { SearchPage } from '@/pages/SearchPage';
import { APP_ROUTES } from '@/shared/const/router';
import { lazyImport } from '@/shared/lib/lazyImport/lazyImport';

// import { AuthLayout } from './layouts/AuthLayout';
import { MainLayout } from './layouts/MainLayout';
const { AuthLayout } = lazyImport(() => import('./layouts/AuthLayout/AuthLayout'), 'AuthLayout');

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
          element: <PlaylistPage />,
        },
        {
          path: APP_ROUTES.artist(':id'),
          element: <div>artist</div>,
        },
        {
          path: APP_ROUTES.track(':id'),
          element: <div>track</div>,
        },
        {
          path: APP_ROUTES.album(':id'),
          element: <div>album</div>,
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
          path: '',
          element: <Navigate to={APP_ROUTES.auth.login} replace={true} />,
        },
        {
          path: APP_ROUTES.auth.login,
          element: <LoginPage />,
        },
        {
          path: APP_ROUTES.auth.register,
          element: <RegisterPage />,
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
