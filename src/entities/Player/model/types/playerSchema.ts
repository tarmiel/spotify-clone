import { Track } from '@/entities/Track';

export interface PlayerSchema {
  isPlaying: boolean;
  isActive: boolean;
  queue: Track[];
  currentTrackIndex: number;
  currentTrack?: Track;
  currentPlaylistId?: string;
}
