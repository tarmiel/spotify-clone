import React, { ReactNode } from 'react';

import storage from '@/shared/lib/storage/storage';
import { AppLoader } from '@/widgets/AppLoader';

import { useInitSessionQuery } from '../../api/session';

type IAuthMiddleware = {
  children: ReactNode;
};

export const AuthMiddleware: React.FC<IAuthMiddleware> = ({ children }) => {
  const token = storage.getToken();

  const { isLoading } = useInitSessionQuery(null, {
    skip: !token,
  });

  if (isLoading) return <AppLoader />;

  return children;
};
