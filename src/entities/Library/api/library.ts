import { rtkApi } from '@/shared/api/rtkApi';

import { ILibrary, ILibraryItem } from '../model/types/library';

export const libraryApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    getLibrary: build.query<ILibrary, null>({
      query: () => ({
        url: `/api/library`,
      }),
      providesTags: ['Library'],
    }),
    addToLibrary: build.mutation<void, Partial<ILibraryItem>>({
      query: (payload) => ({
        url: `/api/library`,
        method: 'POST',
        body: payload,
      }),
      invalidatesTags: ['Library'],
    }),
  }),
});

export const { useGetLibraryQuery, useAddToLibraryMutation } = libraryApi;
