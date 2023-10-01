import React, { FC } from 'react';

import { cn } from '@/shared/lib/classNames';

import { IButtonProps } from '../Button/Button';
import { IconButton } from '../IconButton/IconButton';

import styles from './PlayPauseButton.module.scss';

interface IPlayPauseButtonProps extends IButtonProps {
  isActive?: boolean;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'primary' | 'secondary';
}

export const PlayPauseButton: FC<IPlayPauseButtonProps> = ({
  isActive,
  size = 'md',
  variant = 'primary',
  className,
  ...props
}) => {
  const cls = [styles.PlayPauseButton, className, styles[variant]];

  const buttonIcon = isActive ? 'Pause' : 'Play';

  return (
    <IconButton
      icon={{ type: 'filled', name: buttonIcon }}
      size={size}
      className={cn(cls, styles[size], { [styles.active]: isActive })}
      hoverScale
      rounded={'full'}
      {...props}
    />
  );
};
