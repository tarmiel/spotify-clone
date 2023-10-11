import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { PlayerSchema } from '../types/playerSchema';

const initialState: PlayerSchema = {
  isPlaying: false,
};

export const playerSlice = createSlice({
  name: 'player',
  initialState,
  reducers: {
    nextSong: (state, { payload }: PayloadAction<number>) => {},
    prevSong: (state, { payload }: PayloadAction<number>) => {},
    playPause: (state, { payload }: PayloadAction<number>) => {},
  },
});

// Action creators are generated for each case reducer function
export const { actions: playerActions } = playerSlice;
export const { reducer: playerReducer } = playerSlice;
