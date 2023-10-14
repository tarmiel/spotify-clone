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
    removePlaylist: build.mutation<void, string>({
      query: (playlistId) => ({
        url: `/api/library/playlist/remove/${playlistId}`,
        method: 'PATCH',
      }),
      invalidatesTags: ['Library'],
    }),
  }),
});

export const { useGetLibraryQuery, useCreatePlaylistMutation, useRemovePlaylistMutation } = libraryApi;
