import React, { FC } from 'react';

import { cn } from '@/shared/lib/classNames';

import { MediaItem } from '../../model/types/media';
import { MediaCard } from '../MediaCard/MediaCard';
import { MediaCardSkeleton } from '../MediaCard/MediaCardSkeleton';

import styles from './MediaGrid.module.scss';

interface IMediaGridProps {
  className?: string;
  mediaItems: MediaItem[];
  full?: boolean;
  isLoading?: boolean;
}

const getSkeletons = () => new Array(6).fill(0).map((item, index) => <MediaCardSkeleton key={index} />);

export const MediaGrid: FC<IMediaGridProps> = ({ isLoading, mediaItems, full, className }) => {
  if (isLoading) {
    return <div className={cn(styles.MediaGrid, className, { [styles.fullGrid]: full })}>{getSkeletons()}</div>;
  }

  return (
    <div className={cn(styles.MediaGrid, className, { [styles.fullGrid]: full })}>
      {mediaItems.map((item) => (
        <MediaCard key={item.id} {...item} />
      ))}
    </div>
  );
};
