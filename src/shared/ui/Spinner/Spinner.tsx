import React, { FC } from 'react';

import { cn } from '@/shared/lib/classNames';

import styles from './Spinner.module.scss';

interface ISpinnerProps {
  className?: string;
  size?: 'small' | 'medium' | 'large';
  speed?: 'slow' | 'normal' | 'fast';
}

export const Spinner: FC<ISpinnerProps> = ({ size = 'medium', speed = 'normal', className }) => {
  return (
    <div className={cn(styles.Spinner, styles[`size-${size}`], styles[`speed-${speed}`], className)}>
      <div className={styles.SpinnerDot}></div>
      <div className={styles.SpinnerDot}></div>
      <div className={styles.SpinnerDot}></div>
      <div className={styles.SpinnerDot}></div>
      <div className={styles.SpinnerDot}></div>
      <div className={styles.SpinnerDot}></div>
      <div className={styles.SpinnerDot}></div>
      <div className={styles.SpinnerDot}></div>
    </div>
  );
};
