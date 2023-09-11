import { lazy } from 'react';

export const PlaylistPageAsync = lazy(
  () =>
    new Promise((resolve) => {
      // @ts-ignore
      setTimeout(() => resolve(import('./PlaylistPage')), 1500);
    }),
);
