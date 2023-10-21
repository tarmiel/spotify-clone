import React, { FC } from 'react';

import { cn } from '@/shared/lib/classNames';

import { IButtonProps } from '../Button/Button';
import { IconButton } from '../IconButton/IconButton';

import styles from './RepeatButton.module.scss';

interface IRepeatButtonProps extends IButtonProps {
  className?: string;
  isActive?: boolean;
}

export const RepeatButton: FC<IRepeatButtonProps> = ({ isActive, className, ...props }) => {
  const cls = [styles.RepeatButton, className, { [styles.active]: isActive }];

  return <IconButton icon={{ type: 'outlined', name: 'Repeat' }} className={cn(cls)} rounded={'full'} {...props} />;
};
