import React, { FC, useState } from 'react';

import { cn } from '@/shared/lib/classNames';
import { useThrottle } from '@/shared/lib/hooks/useThrottle/useThrottle';
import { Audio } from '@/shared/ui/Audio/Audio';
import { IconButton, PlayPauseButton } from '@/shared/ui/Button';
import { PlaybackBar } from '@/shared/ui/PlaybackBar/PlaybackBar';
import { HStack, VStack } from '@/shared/ui/Stack';

import styles from './PlayerControls.module.scss';

interface IPlayerControlsProps {
  className?: string;
  volume?: number;
}

export const PlayerControls: FC<IPlayerControlsProps> = ({ volume, className }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [playingValue, setPlayingValue] = useState(0);
  const [seekValue, setSeekValue] = useState(0);

  return (
    <VStack gap={'8'} className={cn(styles.PlayerControls, className)}>
      <HStack justify={'center'} gap={'16'} className={styles.conrols} max>
        <IconButton icon={{ type: 'outlined', name: 'Shuffle' }} />
        <IconButton icon={{ type: 'filled', name: 'PlayerPrev' }} />
        <PlayPauseButton
          variant={'secondary'}
          size={'sm'}
          onClick={() => setIsPlaying((prev) => !prev)}
          isActive={isPlaying}
        />
        <IconButton icon={{ type: 'filled', name: 'PlayerNext' }} />
        <IconButton icon={{ type: 'outlined', name: 'Repeat' }} />
      </HStack>
      <PlaybackBar max={duration} min={0} isLoading={isLoading} value={playingValue} setSeekTime={setSeekValue} />
      {/* <button onClick={() => setMounted(true)}>Start track</button> */}
      <Audio
        src={'http://127.0.0.1:5000/s3.mp3'}
        isPlaying={isPlaying}
        volume={volume}
        seekValue={seekValue}
        onLoadStart={() => setIsLoading(true)}
        onLoadedData={() => setIsLoading(false)}
        onLoadedMetadata={(e) => setDuration(e.currentTarget.duration)}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        onTimeUpdate={(e) => {
          setPlayingValue(Math.floor(e.currentTarget.currentTime));
        }}
      />
    </VStack>
  );
};
