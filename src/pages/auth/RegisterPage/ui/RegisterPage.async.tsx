import { lazy, Suspense } from 'react';

import { PageLoader } from '@/widgets/PageLoader';

const RegisterPage = lazy(
  () =>
    new Promise((resolve) => {
      // @ts-ignore
      setTimeout(() => resolve(import('./RegisterPage')), 1000);
    }),
);

export const RegisterPageAsync = () => {
  return (
    <Suspense fallback={<PageLoader />}>
      <RegisterPage />
    </Suspense>
  );
};
