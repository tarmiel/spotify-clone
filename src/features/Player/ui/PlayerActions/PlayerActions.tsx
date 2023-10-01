import React, { FC } from 'react';

import { cn } from '@/shared/lib/classNames';
import { IconButton } from '@/shared/ui/Button';
import { HStack } from '@/shared/ui/Stack';
import { VolumeBar } from '@/shared/ui/VolumeBar/VolumeBar';

interface IPlayerActionsProps {
  className?: string;
  volume?: number;
  setVolume?: (value: number) => void;
}

export const PlayerActions: FC<IPlayerActionsProps> = ({ setVolume, volume, className }) => {
  return (
    <HStack gap={'4'} justify={'end'} className={cn(className)}>
      <IconButton icon={{ type: 'outlined', name: 'PlayScreen' }} title={'Now Playing View'} />
      <IconButton icon={{ type: 'outlined', name: 'Microphone' }} title={'Lyrics'} />
      <IconButton icon={{ type: 'outlined', name: 'Queue' }} title={'Queue'} />
      <IconButton icon={{ type: 'outlined', name: 'Devices' }} title={'Connect to devices'} />
      <VolumeBar value={volume} setVolume={setVolume} min={0} max={100} />
    </HStack>
  );
};
