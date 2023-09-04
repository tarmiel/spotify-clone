import React, { FC } from 'react';

import { cn } from '@/shared/lib/classNames';
import { PlayPauseButton } from '@/shared/ui/Button/PlayPauseButton/PlayPauseButton';
import { VStack } from '@/shared/ui/Stack';
import { P, Span } from '@/shared/ui/Typography';

import { MediaItem } from '../../model/types/media';

import styles from './MediaCard.module.scss';

interface IMediaCardProps extends MediaItem {
  className?: string;
}

export const MediaCard: FC<IMediaCardProps> = ({ id, title, imgUrl, description, className }) => {
  return (
    <div className={cn(styles.MediaCard, className)}>
      <div className={styles.preview}>
        <img draggable={false} src={imgUrl} alt={title} loading={'lazy'} />
        <div className={styles.playBtn}>
          <PlayPauseButton />
        </div>
      </div>
      <div className={styles.content}>
        <P truncate weight={'bold'} className={styles.title}>
          {title}
        </P>
        <Span truncate className={styles.description}>
          {description}
        </Span>
      </div>
    </div>
  );
};
