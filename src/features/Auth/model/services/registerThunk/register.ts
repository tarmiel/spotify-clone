/* eslint-disable no-restricted-imports */
import { AxiosError } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

import { ThunkConfig } from '@/app/providers/StoreProvider';
import { sessionActions } from '@/entities/Session/model/slice/session';
import { SessionDTO } from '@/entities/Session/model/types/sessionSchema';
import { showNotification } from '@/shared/lib/notification';
import storage from '@/shared/lib/storage/storage';
import { TExternalFormError } from '@/shared/ui/Form/ui/Form/Form';

import { RegisterFormValues } from '../../types/registerForm';

export const register = createAsyncThunk<
  SessionDTO,
  RegisterFormValues,
  ThunkConfig<TExternalFormError<RegisterFormValues>[]>
>('auth/register', async (authData, thunkApi) => {
  const { extra, dispatch, rejectWithValue } = thunkApi;

  try {
    const response = await extra.api.post<SessionDTO>('/api/auth/register', authData);
    console.log('register thunk', response);
    if (!response.data) {
      throw new Error();
    }

    dispatch(sessionActions.setSessionData(response.data));
    storage.setToken(response.data.token);
    return response.data;
  } catch (e) {
    if (e instanceof AxiosError && e.response?.data) {
      const response = e.response;
      // console.log('axios response', response);
      // alert(e.response.data.message);

      if (response.status === 400) {
        showNotification({
          type: 'error',
          content: e.response.data.message,
        });
        return rejectWithValue(e.response.data.errors);
      }
    } else {
      showNotification({
        type: 'error',
        content: 'Something went wrong. Try again later ...',
      });
    }

    return rejectWithValue([]);
  }
});
