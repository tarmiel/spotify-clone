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
  isPlaying: boolean;
  playPauseHandler: () => void;
  duration: number;
  setSeekValue: (value: number) => void;
  isLoadingTrack?: boolean;
  playingValue: number;
}

export const PlayerControls: FC<IPlayerControlsProps> = ({
  isPlaying,
  playPauseHandler,
  duration = 0,
  setSeekValue,
  isLoadingTrack,
  playingValue,
  className,
}) => {
  return (
    <VStack gap={'8'} className={cn(styles.PlayerControls, className)}>
      <HStack justify={'center'} gap={'16'} className={styles.conrols} max>
        <IconButton icon={{ type: 'outlined', name: 'Shuffle' }} />
        <IconButton icon={{ type: 'filled', name: 'PlayerPrev' }} />
        <PlayPauseButton variant={'secondary'} size={'sm'} onClick={() => playPauseHandler()} isActive={isPlaying} />
        <IconButton icon={{ type: 'filled', name: 'PlayerNext' }} />
        <IconButton icon={{ type: 'outlined', name: 'Repeat' }} />
      </HStack>
      <PlaybackBar max={duration} min={0} isLoading={isLoadingTrack} value={playingValue} setSeekTime={setSeekValue} />
    </VStack>
  );
};
