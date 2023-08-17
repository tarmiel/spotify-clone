import React, { FC, ReactNode } from 'react';

import { cn } from '@/shared/lib/classNames';

import { Button, IButtonProps } from '../Button/Button';

import styles from './SecondaryButton.module.scss';

interface ISecondaryButtonProps extends IButtonProps {
  children: ReactNode;
  className?: string;
  size?: 'sm' | 'md';
}

export const SecondaryButton: FC<ISecondaryButtonProps> = ({ children, size = 'md', className, ...props }) => {
  return (
    <Button className={cn(styles.SecondaryButton, styles[size], className)} {...props}>
      {children}
    </Button>
  );
};
