import React, { FC } from 'react';

import { APP_ROUTES } from '@/shared/const/router';
import { cn } from '@/shared/lib/classNames';
import AppLink from '@/shared/ui/AppLink/AppLink';
import { PlayPauseButton } from '@/shared/ui/Button';
import { HStack } from '@/shared/ui/Stack';
import { P } from '@/shared/ui/Typography';

import { SectionItem } from '../../model/types/section';

import styles from './ShortsSectionItem.module.scss';

interface IShortsSectionItemProps extends SectionItem {
  className?: string;
}

const ShortsSectionItem: FC<IShortsSectionItemProps> = ({ id, image, title, type, className }) => {
  return (
    <AppLink
      to={type === 'collection' ? APP_ROUTES.collection : APP_ROUTES.playlist(id)}
      className={cn(styles.ShortsSectionItem, className)}
    >
      <HStack>
        <div className={styles.image}>
          <img src={image.sources[0].url} alt={title} draggable={false} loading={'lazy'} />
        </div>
        <HStack className={styles.content} justify={'between'}>
          <P truncate weight={'bold'}>
            {title}
          </P>
          <div className={styles.playBtn}>
            <PlayPauseButton />
          </div>
        </HStack>
      </HStack>
    </AppLink>
  );
};

export default ShortsSectionItem;
