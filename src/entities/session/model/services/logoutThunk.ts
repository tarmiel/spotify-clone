import { createAsyncThunk } from '@reduxjs/toolkit';

import { ThunkConfig } from '@/app/providers/StoreProvider';
import storage from '@/shared/lib/storage/storage';

import { sessionActions } from '../slice/session';

export const logout = createAsyncThunk<void, void, ThunkConfig<string>>('session/logout', async (_, thunkApi) => {
  const { extra, dispatch, rejectWithValue } = thunkApi;

  try {
    const response = await extra.api.post('/api/auth/logout', {});

    if (!response.data) {
      throw new Error();
    }

    dispatch(sessionActions.clearSessionData());
    storage.clearToken();
  } catch (e) {
    return rejectWithValue('Something went wrong. Try again later ...');
  }
});
