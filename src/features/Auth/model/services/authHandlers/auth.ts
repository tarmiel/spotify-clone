import { useCallback } from 'react';

import { sessionActions, SessionDTO } from '@/entities/Session';
import { api } from '@/shared/api/api';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import storage from '@/shared/lib/storage/storage';

import { LoginFormValues } from '../../types/loginForm';
import { RegisterFormValues } from '../../types/registerForm';
import { loginByEmail } from '../loginThunk/loginByEmail';
import { register } from '../registerThunk/register';

export const useAuthHandlers = (onSuccess?: () => void) => {
  const dispatch = useAppDispatch();

  const loginHandler = useCallback(
    async (data: LoginFormValues) => {
      const response = await dispatch(loginByEmail(data));
      // console.log('result: ', result);
      if (response.meta.requestStatus === 'fulfilled') {
        onSuccess?.();
      }
    },
    [dispatch, onSuccess],
  );

  const registerHandler = useCallback(
    async (data: RegisterFormValues) => {
      const response = await dispatch(register(data));
      // console.log('result: ', result);

      if (response.meta.requestStatus === 'fulfilled') {
        onSuccess?.();
      }
    },
    [dispatch, onSuccess],
  );
  const logoutHandler = useCallback(async () => {
    try {
      const response = await api.get('/api/auth/logout');
      if (response.data) {
        dispatch(sessionActions.clearSessionData());
        storage.clearToken();
        window.location.assign(window.location.origin as unknown as string);
      }
    } catch (e) {
      console.log(e);
    }
  }, [dispatch, onSuccess]);

  return {
    login: loginHandler,
    logout: logoutHandler,
    register: registerHandler,
  };
};
