import { FC } from 'react';

import { cn } from '@/shared/lib/classNames';

import { Button, IButtonProps } from '../Button/Button';

import styles from './ClearButton.module.scss';

interface IClearButtonProps extends IButtonProps {
  withIcon?: boolean;
}

export const ClearButton: FC<IClearButtonProps> = ({ className, withIcon, children, ...props }) => {
  return (
    <Button className={cn(styles.ClearButton, { [styles.withIcon]: withIcon }, className)} {...props}>
      {children}
    </Button>
  );
};
