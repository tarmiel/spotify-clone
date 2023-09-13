import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { LOCAL_STORAGE_TOKEN_KEY } from '@/shared/const/localstorage';

export const rtkApi = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: __API__,
    prepareHeaders: (headers) => {
      const token = localStorage.getItem(LOCAL_STORAGE_TOKEN_KEY) || '';
      if (token) {
        headers.set('Authorization', token);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({}),
});
