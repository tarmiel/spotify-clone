import React, { FC, useCallback, useState } from 'react';

import { cn } from '@/shared/lib/classNames';
import { IconButton } from '@/shared/ui/Button';

import { ProgressBar } from '../ProgressBar/ProgressBar';

import styles from './VolumeBar.module.scss';

interface IVolumeBarProps {
  className?: string;
  value?: number;
  min?: number;
  max?: number;
  step?: number;
  setVolume?: (value: number) => void;
}

type VolumeIcon = 'Volume1' | 'Volume2' | 'Volume3' | 'VolumeOff';

let prevVolume = 0;

export const VolumeBar: FC<IVolumeBarProps> = ({ value = 0, min = 0, max = 100, step, setVolume, className }) => {
  let volumeIcon: VolumeIcon = 'Volume3';
  if (value === min) volumeIcon = 'VolumeOff';
  if (min < value && value < (max - min) * 0.3) volumeIcon = 'Volume1';
  if ((max - min) * 0.3 < value && value < (max - min) * 0.6) volumeIcon = 'Volume2';

  const onResetVolume = () => {
    if (value === 0) return setVolume?.(prevVolume);

    prevVolume = value;
    setVolume?.(0);
  };

  return (
    <div className={cn(styles.VolumeBar, className)}>
      <IconButton icon={{ type: 'outlined', name: volumeIcon }} title={'Volume'} onClick={onResetVolume} />
      <ProgressBar value={value} min={min} max={max} step={step} onChange={setVolume} />
    </div>
  );
};
