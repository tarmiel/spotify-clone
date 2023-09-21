import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { PlayerSchema } from '../types/playerSchema';

const initialState: PlayerSchema = {};

export const playerSlice = createSlice({
  name: 'player',
  initialState,
  reducers: {
    setSessionData: (state, { payload }: PayloadAction<string>) => {},
  },
});

// Action creators are generated for each case reducer function
export const { actions: playerActions } = playerSlice;
export const { reducer: playerReducer } = playerSlice;
