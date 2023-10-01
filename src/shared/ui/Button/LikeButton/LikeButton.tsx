import React, { FC, useState } from 'react';

import { cn } from '@/shared/lib/classNames';

import { IButtonProps } from '../Button/Button';
import { IconButton } from '../IconButton/IconButton';

import styles from './LikeButton.module.scss';

interface ILikeButtonProps extends IButtonProps {
  className?: string;
  isActive?: boolean;
  size?: 'sm' | 'lg';
}

export const LikeButton: FC<ILikeButtonProps> = ({ size = 'sm', className, ...props }) => {
  const [isActive, setIsActive] = useState(false);

  const buttonType = isActive ? 'filled' : 'outlined';

  return (
    <IconButton
      className={cn(styles.LikeButton, { [styles.active]: isActive }, className)}
      icon={{ type: buttonType, name: 'Heart' }}
      onClick={() => setIsActive((prev) => !prev)}
      {...props}
    />
  );
};
