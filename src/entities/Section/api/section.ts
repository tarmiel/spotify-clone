import { rtkApi } from '@/shared/api/rtkApi';

import { Section } from '../model/types/section';

export const sectionApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    getPreviewSections: build.query<Section[], void>({
      query: () => ({
        url: `/api/section/preview`,
      }),
    }),
    getHomeSections: build.query<Section[], null>({
      query: () => ({
        url: `/api/section`,
      }),
    }),
    getShortsSection: build.query<Section, null>({
      query: () => ({
        url: `/api/section/shorts`,
      }),
    }),
  }),
});

export const {
  useGetPreviewSectionsQuery: usePreviewSections,
  useGetHomeSectionsQuery: useHomeSections,
  useGetShortsSectionQuery: useShortsSection,
} = sectionApi;
