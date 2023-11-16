import React, { FC, useCallback } from 'react';
import { useSelector } from 'react-redux';

import {
  getCurrentPlaylistId,
  getCurrentTrack,
  getCurrentTrackIndex,
  getIsPlayerPlaying,
  playerActions,
} from '@/entities/Player';
import { playlistApi } from '@/entities/Playlist';
import { Track } from '@/entities/Track';
import { APP_ROUTES } from '@/shared/const/router';
import { cn } from '@/shared/lib/classNames';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { convertMsToTime } from '@/shared/lib/timeConverter';
import AppLink from '@/shared/ui/AppLink/AppLink';
import { PlayPauseButton } from '@/shared/ui/Button';
import { IconButton } from '@/shared/ui/Button/IconButton/IconButton';
import { Icon } from '@/shared/ui/Icon';
import { HStack, VStack } from '@/shared/ui/Stack';
import { P, Span } from '@/shared/ui/Typography';

import { PlaylistTrack } from '../../model/types/track';
import { PlaylistGrid } from '../PlaylistGrid/PlaylistGrid';

import styles from './PlaylistRow.module.scss';

interface IPlaylistRowProps {
  className?: string;
  number: number;
  track: Track;
  playlistId: string;
}

export const PlaylistRow: FC<IPlaylistRowProps> = ({ number, track, playlistId, className }) => {
  const isPlaying = useSelector(getIsPlayerPlaying);
  const currentPlayingTrack = useSelector(getCurrentTrack);
  const currentPlayingPlaylistId = useSelector(getCurrentPlaylistId);

  const dispatch = useAppDispatch();

  const isCurrentPlaylist = currentPlayingPlaylistId === playlistId;
  const isCurrentTrack = isCurrentPlaylist && currentPlayingTrack?.id === track?.id;

  const coverImg = track.album?.images.find((image) => image.width === 64) || track.album?.images[0];

  const handlePlayPause = useCallback(async () => {
    if (currentPlayingPlaylistId !== playlistId) {
      const { data: playlist } = await dispatch(playlistApi.endpoints.getPlaylistById.initiate(playlistId));
      if (playlist) {
        return dispatch(
          playerActions.setPlayer({
            queue: playlist.tracks.items,
            currentPlaylistId: playlist.id,
            currentTrackIndex: number - 1,
            currentTrack: playlist.tracks.items[number - 1],
            isPlaying: true,
          }),
        );
      }
    }

    if (track.id === currentPlayingTrack?.id) {
      dispatch(playerActions.playPause());
    } else {
      dispatch(playerActions.nextSong(number - 1));
      dispatch(playerActions.playPause(true));
    }
  }, [currentPlayingTrack, dispatch, playlistApi]);

  return (
    <PlaylistGrid className={cn(styles.PlaylistRow, className)}>
      <td>
        <div className={cn(styles.control)}>
          <Span size={'md'} className={cn(styles.num, { [styles.activeTrack]: isCurrentTrack })}>
            {isCurrentTrack && isPlaying ? (
              <img
                width="14"
                height="14"
                alt=""
                src="https://open.spotifycdn.com/cdn/images/equaliser-animated-green.f5eb96f2.gif"
              />
            ) : (
              <>{number}</>
            )}
          </Span>

          <PlayPauseButton variant={'clear'} size={'sm'} className={styles.playBtn} onClick={handlePlayPause} />
          {/* <IconButton icon={{ type: 'filled', name: 'Pause' }} className={styles.playBtn} />
          <IconButton icon={{ type: 'filled', name: 'Play' }} className={styles.playBtn} /> */}
        </div>
      </td>
      <td>
        <HStack gap={'16'} className={styles.info}>
          <img src={coverImg?.url} alt={track.name} width={40} height={40} />
          <VStack>
            <AppLink
              to={APP_ROUTES.track(track.id)}
              underline
              truncate
              className={cn({ [styles.activeTrack]: isCurrentTrack })}
            >
              {track.name}
            </AppLink>
            <div className={styles.artistsList}>
              {track.artists.map((artist) => (
                <AppLink
                  key={artist.id}
                  to={APP_ROUTES.artist(artist.id)}
                  underline
                  variant={'subdued'}
                  size={'sm'}
                  truncate
                >
                  {artist.name}
                </AppLink>
              ))}
            </div>
          </VStack>
        </HStack>
      </td>
      <td>
        {track.album && (
          <AppLink to={APP_ROUTES.album(track.album.id)} underline variant={'subdued'} size={'sm'} truncate>
            {track.album.name}
          </AppLink>
        )}
      </td>
      <td></td>
      <td>
        <HStack gap={'32'} justify={'between'} max>
          <IconButton icon={{ type: 'outlined', name: 'Heart' }} className={styles.likeBtn} />
          <Span>{convertMsToTime(track.duration_ms)}</Span>
          <IconButton icon={{ type: 'outlined', name: 'DotsHorizontal' }} className={styles.contextBtn} />
        </HStack>
      </td>
    </PlaylistGrid>
  );
};
