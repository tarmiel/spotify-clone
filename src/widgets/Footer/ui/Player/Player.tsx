import { FC, useCallback, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { getPlayer, playerActions, playerReducer } from '@/entities/Player';
import { useGetPlaylistByIdQuery } from '@/entities/Playlist';
import { PlayerActions, PlayerControls, PlayerPreview } from '@/features/Player';
import { cn } from '@/shared/lib/classNames';
import DynamicModuleLoader, { ReducersList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Audio } from '@/shared/ui/Audio/Audio';
import { PlaybackBar } from '@/shared/ui/PlaybackBar/PlaybackBar';
import { HStack, VStack } from '@/shared/ui/Stack';

import styles from './Player.module.scss';

interface IPlayerProps {
  className?: string;
}

const playerReducers: ReducersList = {
  player: playerReducer,
};

export const Player: FC<IPlayerProps> = ({ className }) => {
  const dispatch = useAppDispatch();
  const { isActive, isPlaying, queue, currentTrack, currentTrackIndex, currentPlaylistId } = useSelector(getPlayer);

  const [duration, setDuration] = useState(0);
  const [shuffle, setShuffle] = useState(false);
  const [repeat, setRepeat] = useState(false);

  const [seekValue, setSeekValue] = useState(0);
  const [playingValue, setPlayingValue] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [volume, setVolume] = useState(() => {
    const savedVolume = localStorage.getItem('volume');
    if (savedVolume === null) {
      return 30;
    }
    return JSON.parse(savedVolume) as number;
  });

  // const { data: playlist } = useGetPlaylistByIdQuery(currentPlaylistId || '', {
  //   skip: queue.length !== 0 || !currentPlaylistId,
  // });

  // useEffect(() => {
  //   if (playlist && queue.length === 0) {
  //     dispatch(
  //       playerActions.setPlayer({
  //         queue: playlist.tracks.items,
  //         currentPlaylistId: playlist.id,
  //         currentTrack: playlist.tracks.items[0],
  //       }),
  //     );
  //   }
  // }, [playlist]);

  const handlePlayPause = useCallback(
    (state?: boolean) => {
      if (!isActive || !currentTrack) return;

      dispatch(playerActions.playPause(state));
    },
    [isActive, currentTrack],
  );

  const handleShuffle = useCallback(() => setShuffle((prev) => !prev), []);
  const handleRepeat = useCallback(() => setRepeat((prev) => !prev), []);

  const handleNextSong = useCallback(() => {
    // dispatch(playerActions.playPause(false));

    if (!shuffle) {
      dispatch(playerActions.nextSong(currentTrackIndex + 1));
    } else {
      const nextTrackIndex = Math.floor(Math.random() * queue.length);
      dispatch(playerActions.nextSong(nextTrackIndex === currentTrackIndex ? currentTrackIndex + 1 : nextTrackIndex));
    }
  }, [shuffle, currentTrackIndex, queue, isPlaying]);

  const handlePrevSong = useCallback(() => {
    if (shuffle) {
      const prevTrackIndex = Math.floor(Math.random() * queue.length);
      dispatch(playerActions.prevSong(prevTrackIndex === currentTrackIndex ? currentTrackIndex - 1 : prevTrackIndex));
    } else {
      dispatch(playerActions.prevSong(currentTrackIndex - 1));
    }
  }, [shuffle, currentTrackIndex]);

  return (
    <DynamicModuleLoader reducers={playerReducers}>
      <div className={cn(styles.Player, className)}>
        <HStack gap={'16'} align={'center'} justify={'between'} className={styles.container}>
          <div className={styles.trackPreview}>
            <PlayerPreview />
          </div>
          <VStack gap={'8'} max className={styles.trackControls}>
            <PlayerControls
              isPlaying={isPlaying}
              isShuffle={shuffle}
              isRepeat={repeat}
              playPauseHandler={handlePlayPause}
              shuffleHandler={handleShuffle}
              repeatHandler={handleRepeat}
              prevHandler={handlePrevSong}
              nextHandler={handleNextSong}
            />
            <PlaybackBar max={duration} min={0} isLoading={isLoading} value={playingValue} setSeekTime={setSeekValue} />
          </VStack>
          <HStack justify={'end'} className={styles.trackActions}>
            <PlayerActions volume={volume} setVolume={setVolume} />
          </HStack>
        </HStack>
        <Audio
          // src={currentTrack?.url || ''}
          src={currentTrack?.url}
          isPlaying={isPlaying}
          volume={volume}
          loop={repeat}
          seekValue={seekValue}
          autoPlay={isPlaying}
          onLoadStart={() => setIsLoading(true)}
          onLoadedData={() => {
            setIsLoading(false);
            // handlePlayPause(true);
          }}
          onLoadedMetadata={(e) => setDuration(e.currentTarget.duration)}
          onTimeUpdate={(e) => {
            setPlayingValue(Math.floor(e.currentTarget.currentTime));
          }}
          onEnded={handleNextSong}
          // onPlay={() => handlePlayPause(true)}
          // onPause={() => handlePlayPause(false)}
        />
      </div>
    </DynamicModuleLoader>
  );
};
