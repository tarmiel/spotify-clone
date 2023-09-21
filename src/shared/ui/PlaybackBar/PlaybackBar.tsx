import React, { FC } from 'react';

import { cn } from '@/shared/lib/classNames';
import { convertMsToTime } from '@/shared/lib/timeConverter';

import { ProgressBar } from '../ProgressBar/ProgressBar';
import { Span } from '../Typography';

import styles from './PlaybackBar.module.scss';

interface IPlaybackBarProps {
  className?: string;
  value?: number;
  min?: number;
  max?: number;
  step?: number;
  isLoading?: boolean;
  setSeekTime?: (value: number) => void;
}

export const PlaybackBar: FC<IPlaybackBarProps> = ({
  value = 0,
  min = 0,
  max = 0,
  step,
  isLoading,
  setSeekTime,
  className,
}) => {
  const playTime = convertMsToTime(value * 1000);
  const maxPlayTime = convertMsToTime(max * 1000);

  return (
    <div className={cn(styles.PlaybackBar, className)}>
      <Span size={'xs'} className={cn(styles.time, styles.leftTime)}>
        {isLoading ? '--/--' : playTime}
      </Span>
      <ProgressBar
        value={value}
        min={min}
        max={Math.floor(max)}
        onInput={setSeekTime}
        step={step}
        aria-valuetext={`${playTime}/${maxPlayTime}`}
        isLoading={isLoading}
      />
      <Span size={'xs'} className={cn(styles.time, styles.rightTime)}>
        {isLoading ? '--/--' : maxPlayTime}
      </Span>
    </div>
  );
};
