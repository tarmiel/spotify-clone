import React, { FC } from 'react';

import { cn } from '@/shared/lib/classNames';
import { IconButton, PlayPauseButton } from '@/shared/ui/Button';
import { HStack, VStack } from '@/shared/ui/Stack';

import styles from './PlayerControls.module.scss';

interface IPlayerControlsProps {
  className?: string;
}

export const PlayerControls: FC<IPlayerControlsProps> = ({ className }) => {
  return (
    <VStack className={cn(styles.PlayerControls, className)}>
      <HStack justify={'center'} gap={'16'} className={styles.conrols} max>
        <IconButton icon={{ type: 'outlined', name: 'Shuffle' }} />
        <IconButton icon={{ type: 'filled', name: 'PlayerPrev' }} />
        <PlayPauseButton variant={'secondary'} size={'sm'} />
        <IconButton icon={{ type: 'filled', name: 'PlayerNext' }} />
        <IconButton icon={{ type: 'outlined', name: 'Repeat' }} />
      </HStack>
      <div className={styles.playbackBar}></div>
    </VStack>
  );
};
