import React, { FC, ReactNode } from 'react';

import { cn } from '@/shared/lib/classNames';

import { Icon, IconName, IconType } from '../../Icon/Icon';
import { Button, IButtonProps } from '../Button/Button';

import styles from './OutlinedButton.module.scss';

interface IOutlinedButtonProps<T extends IconType> extends IButtonProps {
  children: ReactNode;
  className?: string;
  size?: 'sm' | 'md';
  icon?: {
    type: T;
    name: IconName<T>;
  };
}

export const OutlinedButton = <T extends IconType>({
  children,
  size = 'md',
  icon,
  className,
  ...props
}: IOutlinedButtonProps<T>) => {
  return (
    <Button className={cn(styles.OutlinedButton, styles[size], { [styles.withIcon]: icon }, className)} {...props}>
      {icon && <Icon {...icon} className={styles.icon} />}
      <span>{children}</span>
    </Button>
  );
};
