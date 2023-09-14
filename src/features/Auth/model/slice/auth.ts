import { createSlice } from '@reduxjs/toolkit';

import { loginByEmail } from '../services/loginThunk/loginByEmail';
import { register } from '../services/registerThunk/register';
import { AuthSchema } from '../types/authSchema';

const initialState: AuthSchema = {
  errors: {
    loginErrors: undefined,
    registerErrors: undefined,
  },
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loginByEmail.pending, (state) => {
        state.errors = {};
        state.isLoading = true;
      })
      .addCase(loginByEmail.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(loginByEmail.rejected, (state, action) => {
        state.isLoading = false;
        state.errors.registerErrors = action.payload;
      })
      .addCase(register.pending, (state) => {
        state.errors = {};
        state.isLoading = true;
      })
      .addCase(register.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(register.rejected, (state, action) => {
        state.isLoading = false;
        state.errors.registerErrors = action.payload;
      });
  },
});

// Action creators are generated for each case reducer function
export const { actions: authActions } = authSlice;
export const { reducer: authReducer } = authSlice;
