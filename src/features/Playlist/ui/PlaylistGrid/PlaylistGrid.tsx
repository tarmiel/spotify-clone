import React, { FC, ReactNode } from 'react';

import { cn } from '@/shared/lib/classNames';

import styles from './PlaylistGrid.module.scss';

interface IPlaylistGridProps {
  className?: string;
  children?: ReactNode;
}

export const PlaylistGrid: FC<IPlaylistGridProps> = ({ children, className }) => {
  return <div className={cn(styles.PlaylistGrid, className)}>{children}</div>;
};
