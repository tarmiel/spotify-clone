import { FC, useState } from 'react';

import { PlayerActions, PlayerControls, PlayerPreview } from '@/features/Player';
import { cn } from '@/shared/lib/classNames';
import { HStack } from '@/shared/ui/Stack';

import styles from './Player.module.scss';

interface IPlayerProps {
  className?: string;
}

export const Player: FC<IPlayerProps> = ({ className }) => {
  const [volume, setVolume] = useState(30);

  return (
    <div className={cn(styles.Player, className)}>
      <HStack gap={'16'} align={'center'} justify={'between'} className={styles.container}>
        <div className={styles.trackPreview}>
          <PlayerPreview />
        </div>
        <div className={styles.trackControls}>
          <PlayerControls volume={volume} />
        </div>
        <HStack justify={'end'} className={styles.trackActions}>
          <PlayerActions volume={volume} setVolume={setVolume} />
        </HStack>
      </HStack>
    </div>
  );
};
