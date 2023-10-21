export {
  getCurrentPlaylistId,
  getCurrentTrack,
  getCurrentTrackIndex,
  getIsPlayerActive,
  getIsPlayerPlaying,
  getPlayer,
  getQueue,
} from './model/selectors/player';
export { playerActions, playerReducer } from './model/slice/playerSlice';
export type { PlayerSchema } from './model/types/playerSchema';
