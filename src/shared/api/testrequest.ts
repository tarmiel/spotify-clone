import { rtkApi } from './rtkApi';

export const testApiSlice = rtkApi.injectEndpoints({
  endpoints: (builder) => ({
    test: builder.query({
      query: () => ({
        url: '/api/test',
      }),
    }),
  }),
});

export const { useTestQuery } = testApiSlice;
