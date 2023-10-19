import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { PlayerSchema } from '../types/playerSchema';

const initialState: PlayerSchema = {
  queue: [],
  currentTrackIndex: 0,
  isPlaying: false,
  isActive: true,
};

export const playerSlice = createSlice({
  name: 'player',
  initialState,
  reducers: {
    nextSong: (state, { payload }: PayloadAction<number>) => {
      if (state.queue[payload]) {
        state.currentTrack = state.queue[payload];
        state.currentTrackIndex = payload;
      } else {
        state.currentTrack = state.queue[0];
        state.currentTrackIndex = 0;
      }

      state.isActive = true;
    },
    prevSong: (state, { payload }: PayloadAction<number>) => {
      if (state.queue[payload]) {
        state.currentTrack = state.queue[payload];
        state.currentTrackIndex = payload;
      } else {
        state.currentTrack = state.queue[0];
        state.currentTrackIndex = 0;
      }

      state.isActive = true;
    },
    playPause: (state, { payload }: PayloadAction<boolean | undefined>) => {
      state.isPlaying = payload ?? !state.isPlaying;
    },
  },
});

// Action creators are generated for each case reducer function
export const { actions: playerActions } = playerSlice;
export const { reducer: playerReducer } = playerSlice;
