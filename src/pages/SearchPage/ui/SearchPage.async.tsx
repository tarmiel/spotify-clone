import { lazy, Suspense } from 'react';

import { PageLoader } from '@/widgets/PageLoader';

const SearchPage = lazy(
  () =>
    new Promise((resolve) => {
      // @ts-ignore
      setTimeout(() => resolve(import('./SearchPage')), 1500);
    }),
);

export const SearchPageAsync = () => {
  return (
    <Suspense fallback={<PageLoader />}>
      <SearchPage />
    </Suspense>
  );
};
