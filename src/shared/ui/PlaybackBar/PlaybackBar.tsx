import React, { FC } from 'react';

import { cn } from '@/shared/lib/classNames';
import { getTime } from '@/shared/lib/timeConverter/getTime';

import { ProgressBar } from '../ProgressBar/ProgressBar';
import { Span } from '../Typography';

import styles from './PlaybackBar.module.scss';

interface IPlaybackBarProps {
  className?: string;
  value?: number;
  min?: number;
  max?: number;
  step?: number;
  setPlayTime?: (value: number) => void;
}

export const PlaybackBar: FC<IPlaybackBarProps> = ({ value = 0, min = 0, max = 0, step, setPlayTime, className }) => {
  return (
    <div className={cn(styles.PlaybackBar, className)}>
      <Span size={'xs'} className={cn(styles.time, styles.leftTime)}>
        {value === 0 ? '0:00' : getTime(value)}
      </Span>
      <ProgressBar value={value} min={min} max={max} onChange={setPlayTime} step={step} aria-valuetext={`${value}`} />
      <Span size={'xs'} className={cn(styles.time, styles.rightTime)}>
        {max === 0 ? '0:00' : getTime(max)}
      </Span>
    </div>
  );
};
