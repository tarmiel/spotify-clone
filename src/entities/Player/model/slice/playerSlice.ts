import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { PlayerSchema } from '../types/playerSchema';

const initialState: PlayerSchema = {
  queue: [],
  currentTrackIndex: 0,
  isPlaying: false,
  isActive: false,
  currentPlaylistId: '', // 6527cbaa9290658a887d02d5
};

export const playerSlice = createSlice({
  name: 'player',
  initialState,
  reducers: {
    setPlayer: (state, { payload }: PayloadAction<Partial<PlayerSchema>>) => {
      return { ...state, ...payload, isActive: true };
    },
    initPlaylist: (state, { payload }: PayloadAction<Pick<PlayerSchema, 'currentPlaylistId' | 'queue'>>) => {
      return { ...initialState, ...payload, isActive: true };
    },
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
