import { lazy, Suspense } from 'react';

import { PageLoader } from '@/widgets/PageLoader';

const PlaylistPage = lazy(
  () =>
    new Promise((resolve) => {
      // @ts-ignore
      setTimeout(() => resolve(import('./PlaylistPage')), 1500);
    }),
);

export const PlaylistPageAsync = () => {
  return (
    <Suspense fallback={<PageLoader />}>
      <PlaylistPage />
    </Suspense>
  );
};
