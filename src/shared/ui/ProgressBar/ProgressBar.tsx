import React, { ChangeEvent, ChangeEventHandler, FC, InputHTMLAttributes, useState } from 'react';

import { cn } from '@/shared/lib/classNames';

import styles from './ProgressBar.module.scss';

interface IProgressBarProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
  className?: string;
  min?: number;
  max?: number;
  step?: number;
  value?: number;
  onChange?: (value: number) => void;
  isLoading?: boolean;
}

export const ProgressBar: FC<IProgressBarProps> = ({
  min = 0,
  max = 100,
  value = 0,
  step,
  onChange,
  isLoading,
  className,
  ...props
}) => {
  let verifiedValue = value;
  if (value < min) verifiedValue = min;
  if (value > max) verifiedValue = max;

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    onChange?.(Number(e.target.value));
  };

  return (
    <div
      className={cn(styles.ProgressBar, { [styles.loading]: isLoading }, className)}
      style={{ '--progress-bar-transform': `${(verifiedValue * 100) / max}%` } as React.CSSProperties}
      data-testid="playback-progressbar"
    >
      <input
        className={styles.range}
        type="range"
        min={min}
        max={max}
        step={step || 'any'}
        aria-valuetext="0:33/2:50"
        value={verifiedValue}
        onChange={onChangeHandler}
        {...props}
      />
      {/* <label className="hidden-visually">
        Change progress
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          aria-valuetext="0:33/2:50"
          value={val}
          onChange={onChanged}
          {...props}
        />
      </label>
      <div
        className={styles.container}
        style={{ '--progress-bar-transform': `${(value * 100) / max}%` } as React.CSSProperties}
        data-testid="progress-bar"
      >
        <div className={styles.bar} data-testid="progress-bar-background">
          <div className={styles.track}>
            <div className={styles.progress}></div>
          </div>
          <div className={styles.thumb}></div>
        </div>
        <div style={{ width: '100%' }}></div>
      </div> */}
    </div>
  );
};
