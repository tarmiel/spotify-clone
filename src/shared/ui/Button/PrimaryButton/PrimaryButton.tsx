import React, { FC, ReactNode } from 'react';

import { cn } from '@/shared/lib/classNames';

import { Button, IButtonProps } from '../Button/Button';

import styles from './PrimaryButton.module.scss';

interface IPrimaryButtonProps extends IButtonProps {
  children: ReactNode;
  className?: string;
}

export const PrimaryButton: FC<IPrimaryButtonProps> = ({ children, className, ...props }) => {
  return (
    <Button className={cn(styles.PrimaryButton, className)} {...props}>
      {children}
    </Button>
  );
};
