import { StateSchema } from '@/app/providers/StoreProvider';

import { PlayerSchema } from '../types/playerSchema';

const defaultPlayer: PlayerSchema = {
  isActive: false,
  isPlaying: false,
  queue: [],
  currentTrackIndex: 0,
  currentPlaylistId: '',
};
export const getPlayer = (state: StateSchema) => state.player || defaultPlayer;

export const getIsPlayerActive = (state: StateSchema) => state.player?.isActive || false;
export const getIsPlayerPlaying = (state: StateSchema) => state.player?.isPlaying || false;
export const getCurrentTrack = (state: StateSchema) => state.player?.currentTrack;
export const getQueue = (state: StateSchema) => state.player?.queue || [];
export const getCurrentTrackIndex = (state: StateSchema) => state.player?.currentTrackIndex || 0;
export const getCurrentPlaylistId = (state: StateSchema) => state.player?.currentPlaylistId || '';
