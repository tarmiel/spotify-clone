import { FC, memo } from 'react';

import { cn } from '@/shared/lib/classNames';
import { IconButton, PlayPauseButton, RepeatButton, ShuffleButton } from '@/shared/ui/Button';
import { HStack } from '@/shared/ui/Stack';

import styles from './PlayerControls.module.scss';

interface IPlayerControlsProps {
  className?: string;
  isPlaying: boolean;
  playPauseHandler: () => void;
  isShuffle: boolean;
  shuffleHandler: () => void;
  isRepeat: boolean;
  repeatHandler: () => void;
  prevHandler: () => void;
  nextHandler: () => void;
}

export const PlayerControls: FC<IPlayerControlsProps> = memo(
  ({
    isPlaying,
    playPauseHandler,
    isShuffle,
    shuffleHandler,
    isRepeat,
    repeatHandler,
    prevHandler,
    nextHandler,
    className,
  }) => {
    return (
      <HStack justify={'center'} gap={'16'} className={cn(styles.PlayerControls, styles.conrols, className)} max>
        <ShuffleButton isActive={isShuffle} onClick={shuffleHandler} />
        <IconButton icon={{ type: 'filled', name: 'PlayerPrev' }} onClick={prevHandler} />
        <PlayPauseButton variant={'secondary'} size={'sm'} onClick={() => playPauseHandler()} isActive={isPlaying} />
        <IconButton icon={{ type: 'filled', name: 'PlayerNext' }} onClick={nextHandler} />
        <RepeatButton isActive={isRepeat} onClick={repeatHandler} />
      </HStack>
    );
  },
);
