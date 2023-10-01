import { BaseQueryFn, createApi, FetchArgs, fetchBaseQuery, FetchBaseQueryError } from '@reduxjs/toolkit/query/react';

import { SessionDTO } from '@/entities/Session';

// eslint-disable-next-line no-restricted-imports
import { sessionActions } from '../../entities/Session/model/slice/session';
import storage from '../lib/storage/storage';

const baseQuery = fetchBaseQuery({
  baseUrl: __API__,
  credentials: 'include',
  prepareHeaders: (headers) => {
    const token = storage.getToken();
    if (token) {
      headers.set('Authorization', `Bearer ${token}`);
    }
    return headers;
  },
});

const baseQueryWithReauth: BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError> = async (
  args,
  api,
  extraOptions,
) => {
  let result = await baseQuery(args, api, extraOptions);

  if (result?.error?.status === 401) {
    // send refresh token to get new access token
    const refreshResult = await baseQuery('/api/auth/refresh', api, extraOptions);

    if (refreshResult.meta?.response?.status === 200 && refreshResult.data) {
      const sessionData = refreshResult.data as SessionDTO;
      // store the new token and init session
      api.dispatch(sessionActions.setSessionData(sessionData));
      storage.setToken(sessionData.token);
      // retry the original query with new access token
      result = await baseQuery(args, api, extraOptions);
    } else {
      await baseQuery(
        {
          url: `api/auth/logout`,
          method: 'POST',
          body: {},
        },
        api,
        extraOptions,
      );
      api.dispatch(sessionActions.clearSessionData());
      storage.clearToken();
      // window.location.href = '/auth/login';
      // alert('Unathorized');
    }
  }

  return result;
};

export const rtkApi = createApi({
  reducerPath: 'api',
  tagTypes: ['Library'],
  baseQuery: baseQueryWithReauth,
  endpoints: (builder) => ({}),
});
