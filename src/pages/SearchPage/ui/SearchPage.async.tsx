import { lazy } from 'react';

export const SearchPageAsync = lazy(
  () =>
    new Promise((resolve) => {
      // @ts-ignore
      setTimeout(() => resolve(import('./SearchPage')), 1500);
    }),
);
