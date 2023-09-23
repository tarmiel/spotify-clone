import { rtkApi } from '@/shared/api/rtkApi';

import { Section } from '../model/types/section';

export const sectionApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    getPreviewSections: build.query<Section[], null>({
      query: () => ({
        url: `/api/section/preview`,
      }),
    }),
    getHomeSections: build.query<Section[], null>({
      query: () => ({
        url: `/api/section`,
      }),
    }),
  }),
});

export const { useGetPreviewSectionsQuery: usePreviewSections, useGetHomeSectionsQuery: useHomeSections } = sectionApi;
