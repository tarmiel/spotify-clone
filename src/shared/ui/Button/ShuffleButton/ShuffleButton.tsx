import React, { FC } from 'react';

import { cn } from '@/shared/lib/classNames';

import { IButtonProps } from '../Button/Button';
import { IconButton } from '../IconButton/IconButton';

import styles from './ShuffleButton.module.scss';

interface IShuffleButtonProps extends IButtonProps {
  className?: string;
  isActive?: boolean;
}

export const ShuffleButton: FC<IShuffleButtonProps> = ({ isActive, className, ...props }) => {
  const cls = [styles.ShuffleButton, className, { [styles.active]: isActive }];

  return <IconButton icon={{ type: 'outlined', name: 'Shuffle' }} className={cn(cls)} rounded={'full'} {...props} />;
};
