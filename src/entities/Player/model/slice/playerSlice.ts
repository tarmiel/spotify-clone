import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { PlayerSchema } from '../types/playerSchema';

const initialState: PlayerSchema = {
  isPlaying: false,
};

export const playerSlice = createSlice({
  name: 'player',
  initialState,
  reducers: {
    nextSong: (state, { payload }: PayloadAction<string>) => {},
    prevSong: (state, { payload }: PayloadAction<string>) => {},
    playPause: (state, { payload }: PayloadAction<string>) => {},
  },
});

// Action creators are generated for each case reducer function
export const { actions: playerActions } = playerSlice;
export const { reducer: playerReducer } = playerSlice;
