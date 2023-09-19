import React, { FC } from 'react';

import { cn } from '@/shared/lib/classNames';
import { IconButton } from '@/shared/ui/Button';
import { HStack } from '@/shared/ui/Stack';

interface IPlayerActionsProps {
  className?: string;
}

export const PlayerActions: FC<IPlayerActionsProps> = ({ className }) => {
  return (
    <HStack gap={'4'} className={cn(className)}>
      <IconButton icon={{ type: 'outlined', name: 'PlayScreen' }} title={'Now Playing View'} />
      <IconButton icon={{ type: 'outlined', name: 'Microphone' }} title={'Lyrics'} />
      <IconButton icon={{ type: 'outlined', name: 'Queue' }} title={'Queue'} />
      <IconButton icon={{ type: 'outlined', name: 'Devices' }} title={'Connect to devices'} />
      <IconButton icon={{ type: 'outlined', name: 'Volume3' }} title={'Volume'} />
    </HStack>
  );
};
