import { rtkApi } from '@/shared/api/rtkApi';

import { sessionActions } from '../model/slice/session';
import { SessionDTO } from '../model/types/sessionSchema';

export const sessionApiSlice = rtkApi.injectEndpoints({
  endpoints: (builder) => ({
    initSession: builder.query<SessionDTO, null>({
      query: () => ({
        url: '/api/auth/me',
      }),
      async onQueryStarted(args, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;

          dispatch(sessionActions.setSessionData(data));
        } catch (error) {
          console.log(error);
        }
      },
    }),
  }),
});

export const { useInitSessionQuery } = sessionApiSlice;
