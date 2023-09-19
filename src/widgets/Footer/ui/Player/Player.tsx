import { FC } from 'react';

import { PlayerActions, PlayerControls, PlayerPreview } from '@/features/Player';
import { cn } from '@/shared/lib/classNames';
import { HStack } from '@/shared/ui/Stack';

import styles from './Player.module.scss';

interface IPlayerProps {
  className?: string;
}

export const Player: FC<IPlayerProps> = ({ className }) => {
  return (
    <div className={cn(styles.Player, className)}>
      <HStack gap={'16'} align={'center'} justify={'between'} className={styles.container}>
        <div className={styles.trackPreview}>
          <PlayerPreview />
        </div>
        <div className={styles.trackControls}>
          <PlayerControls />
        </div>
        <HStack justify={'end'} className={styles.trackActions}>
          <PlayerActions />
        </HStack>
      </HStack>
    </div>
  );
};
