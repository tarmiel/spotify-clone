import React, { FC } from 'react';

import { cn } from '@/shared/lib/classNames';

import { MediaItem } from '../../model/types/media';
import { MediaCard } from '../MediaCard/MediaCard';

import styles from './MediaGrid.module.scss';

interface IMediaGridProps {
  className?: string;
  mediaItems: MediaItem[];
  full?: boolean;
}

export const MediaGrid: FC<IMediaGridProps> = ({ mediaItems, full, className }) => {
  return (
    <div className={cn(styles.MediaGrid, className, { [styles.fullGrid]: full })}>
      {mediaItems.map((item) => (
        <MediaCard key={item.id} {...item} />
      ))}
    </div>
  );
};
