import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { SessionDTO, SessionSchema } from '../types/sessionSchema';

const initialState: SessionSchema = {
  user: null,
  token: null,
  isAuthorized: false,
};

export const sessionSlice = createSlice({
  name: 'session',
  initialState,
  reducers: {
    setSessionData: (state, { payload }: PayloadAction<SessionDTO>) => {
      state.isAuthorized = true;
      state.user = payload.user;
      state.token = payload.token;
    },
    clearSessionData: (state) => {
      state.isAuthorized = false;
      state.user = null;
      state.token = null;
    },
  },
});

// Action creators are generated for each case reducer function
export const { actions: sessionActions } = sessionSlice;
export const { reducer: sessionReducer } = sessionSlice;
