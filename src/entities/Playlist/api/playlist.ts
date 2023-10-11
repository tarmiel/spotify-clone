import { rtkApi } from '@/shared/api/rtkApi';

import { Playlist } from '../model/types/playlist';

export const playlistApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    getPlaylistById: build.query<Playlist, string>({
      query: (id) => ({
        url: `/api/playlist/` + id,
      }),
    }),
  }),
});

export const { useGetPlaylistByIdQuery } = playlistApi;
