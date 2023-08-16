import React, { FC, ReactNode } from 'react';

import { cn } from '@/shared/lib/classNames';

import { BaseButton, IBaseButtonProps } from '../BaseButton/BaseButton';

import styles from './IconButton.module.scss';

interface IIconButtonProps extends IBaseButtonProps {
  icon: ReactNode;
  rounded?: boolean;
  bg?: 'highlight' | 'base';
}

export const IconButton: FC<IIconButtonProps> = ({ icon, rounded, bg, ...props }) => {
  const cls = [styles.IconButton, bg && styles[bg], { [styles.rounded]: rounded }];
  return <BaseButton className={cn(cls)}>{icon}</BaseButton>;
};
