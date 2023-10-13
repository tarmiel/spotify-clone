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
    createPlaylist: build.mutation<void, number>({
      query: (count) => ({
        url: `/api/library/create`,
        method: 'POST',
        body: { count },
      }),
      invalidatesTags: ['Library'],
    }),
  }),
});

export const { useGetLibraryQuery, useCreatePlaylistMutation } = libraryApi;
