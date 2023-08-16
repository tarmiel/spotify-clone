import React, { FC, ReactElement } from 'react';

import { cn } from '@/shared/lib/classNames';

import { BaseButton, IBaseButtonProps } from '../BaseButton/BaseButton';

import styles from './ClearButton.module.scss';

interface IClearButtonProps extends IBaseButtonProps {
  icon?: ReactElement;
}

export const ClearButton: FC<IClearButtonProps> = ({ icon, className, children, ...props }) => {
  return (
    <BaseButton className={cn(styles.ClearButton, { [styles.withIcon]: !!icon }, className)} {...props}>
      {icon}
      {children}
    </BaseButton>
  );
};
