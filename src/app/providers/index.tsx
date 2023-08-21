import React, { FC, ReactNode, Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';

import { AppLoader } from '@/widgets/AppLoader';

import { ErrorBoundary } from './ErrorBoundary';

interface IAppProviderProps {
  children: ReactNode;
}

export const AppProvider: FC<IAppProviderProps> = ({ children }) => {
  return (
    <Suspense fallback={<AppLoader />}>
      <ErrorBoundary>
        <BrowserRouter>{children}</BrowserRouter>
      </ErrorBoundary>
    </Suspense>
  );
};
