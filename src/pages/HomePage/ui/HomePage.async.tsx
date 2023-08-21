import { lazy, Suspense } from 'react';

import { PageLoader } from '@/widgets/PageLoader';

const HomePageLazy = lazy(
  () =>
    new Promise((resolve) => {
      // @ts-ignore
      setTimeout(() => resolve(import('./HomePage')), 1500);
    }),
);

export const HomePageAsync = () => {
  return (
    <Suspense fallback={<PageLoader />}>
      <HomePageLazy />
    </Suspense>
  );
};
