import React, { FC } from 'react';

import { cn } from '@/shared/lib/classNames';
import { IconButton } from '@/shared/ui/Button';
import { HStack } from '@/shared/ui/Stack';
import { VolumeBar } from '@/shared/ui/VolumeBar/VolumeBar';

interface IPlayerActionsProps {
  className?: string;
}

export const PlayerActions: FC<IPlayerActionsProps> = ({ className }) => {
  return (
    <HStack gap={'4'} justify={'end'} className={cn(className)}>
      <IconButton icon={{ type: 'outlined', name: 'PlayScreen' }} title={'Now Playing View'} />
      <IconButton icon={{ type: 'outlined', name: 'Microphone' }} title={'Lyrics'} />
      <IconButton icon={{ type: 'outlined', name: 'Queue' }} title={'Queue'} />
      <IconButton icon={{ type: 'outlined', name: 'Devices' }} title={'Connect to devices'} />
      <VolumeBar value={50} min={0} max={100} />
    </HStack>
  );
};
