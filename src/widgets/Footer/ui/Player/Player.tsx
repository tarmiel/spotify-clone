import { FC, useCallback, useState } from 'react';
import { useSelector } from 'react-redux';

import {
  getCurrentTrack,
  getCurrentTrackIndex,
  getIsPlayerPlaying,
  getPlayer,
  getQueue,
  playerActions,
  playerReducer,
} from '@/entities/Player';
import { getIsPlayerActive } from '@/entities/Player';
import { PlayerActions, PlayerControls, PlayerPreview } from '@/features/Player';
import { cn } from '@/shared/lib/classNames';
import DynamicModuleLoader, { ReducersList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Audio } from '@/shared/ui/Audio/Audio';
import { HStack } from '@/shared/ui/Stack';

import styles from './Player.module.scss';

interface IPlayerProps {
  className?: string;
}

const playerReducers: ReducersList = {
  player: playerReducer,
};

export const Player: FC<IPlayerProps> = ({ className }) => {
  const dispatch = useAppDispatch();
  const isActive = useSelector(getIsPlayerActive);
  const isPlaying = useSelector(getIsPlayerPlaying);
  const queue = useSelector(getQueue);
  const currentTrack = useSelector(getCurrentTrack);
  const currentTrackIndex = useSelector(getCurrentTrackIndex);

  const [duration, setDuration] = useState(0);
  const [shuffle, setShuffle] = useState(false);

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

  const handlePlayPause = useCallback(
    (state?: boolean) => {
      if (!isActive || !currentTrack) return;

      dispatch(playerActions.playPause(state));
    },
    [isActive, currentTrack],
  );

  const handleNextSong = useCallback(() => {
    dispatch(playerActions.playPause(false));

    if (!shuffle) {
      dispatch(playerActions.nextSong((currentTrackIndex + 1) % queue.length));
    } else {
      dispatch(playerActions.nextSong(Math.floor(Math.random() * queue.length)));
    }
  }, [shuffle]);

  const handlePrevSong = useCallback(() => {
    dispatch(playerActions.playPause(false));

    if (shuffle) {
      dispatch(playerActions.prevSong(Math.floor(Math.random() * queue.length)));
    } else {
      dispatch(playerActions.prevSong(currentTrackIndex - 1));
    }
  }, [shuffle]);

  return (
    <DynamicModuleLoader reducers={playerReducers}>
      <div className={cn(styles.Player, className)}>
        <HStack gap={'16'} align={'center'} justify={'between'} className={styles.container}>
          <div className={styles.trackPreview}>
            <PlayerPreview />
          </div>
          <div className={styles.trackControls}>
            <PlayerControls
              duration={duration}
              isPlaying={isPlaying}
              playPauseHandler={handlePlayPause}
              setSeekValue={setSeekValue}
              playingValue={playingValue}
              isLoadingTrack={isLoading}
            />
          </div>
          <HStack justify={'end'} className={styles.trackActions}>
            <PlayerActions volume={volume} setVolume={setVolume} />
          </HStack>
        </HStack>
        <Audio
          src={currentTrack?.url}
          // src={currentTrack?.url || 'http://127.0.0.1:5000/s3.mp3'}
          isPlaying={isPlaying}
          volume={volume}
          seekValue={seekValue}
          onLoadStart={() => setIsLoading(true)}
          onLoadedData={() => setIsLoading(false)}
          onLoadedMetadata={(e) => setDuration(e.currentTarget.duration)}
          onPlay={() => handlePlayPause(true)}
          onPause={() => handlePlayPause(false)}
          onTimeUpdate={(e) => {
            setPlayingValue(Math.floor(e.currentTarget.currentTime));
          }}
        />
      </div>
    </DynamicModuleLoader>
  );
};
