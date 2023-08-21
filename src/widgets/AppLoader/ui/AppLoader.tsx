import React, { FC } from 'react';

import { cn } from '@/shared/lib/classNames';
import { Spinner } from '@/shared/ui/Spinner/Spinner';

import styles from './AppLoader.module.scss';

interface IAppLoaderProps {
  className?: string;
}

export const AppLoader: FC<IAppLoaderProps> = ({ className }) => {
  return (
    <div className={cn(styles.AppLoader, className)}>
      <Spinner size={'large'} />
    </div>
  );
};
