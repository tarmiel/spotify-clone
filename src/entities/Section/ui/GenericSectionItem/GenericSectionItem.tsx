import React, { FC } from 'react';

import { cn } from '@/shared/lib/classNames';
import { PlayPauseButton } from '@/shared/ui/Button';
import { P, Span } from '@/shared/ui/Typography';

import { SectionItem } from '../../model/types/section';

import styles from './GenericSectionItem.module.scss';

interface IGenericSectionItemProps extends SectionItem {
  className?: string;
}

export const GenericSectionItem: FC<IGenericSectionItemProps> = ({ title, image, description, className }) => {
  return (
    <div className={cn(className)}>
      <div className={cn(styles.GenericSectionItem, className)}>
        <div className={styles.preview}>
          <img draggable={false} src={image.sources[0].url} alt={title} loading={'lazy'} />
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
    </div>
  );
};
