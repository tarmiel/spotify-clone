import React, { FC } from 'react';

import { cn } from '@/shared/lib/classNames';

import { Button, IButtonProps } from '../Button/Button';

import styles from './ClearButton.module.scss';

interface IClearButtonProps extends IButtonProps {
  withIcon?: boolean;
}

export const ClearButton = React.forwardRef<HTMLButtonElement, IClearButtonProps>(
  ({ className, withIcon, children, ...props }, ref) => {
    return (
      <Button className={cn(styles.ClearButton, { [styles.withIcon]: withIcon }, className)} ref={ref} {...props}>
        {children}
      </Button>
    );
  },
);
