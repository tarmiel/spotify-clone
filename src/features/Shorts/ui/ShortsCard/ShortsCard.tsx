import React, { FC } from 'react';

import { APP_ROUTES } from '@/shared/const/router';
import { cn } from '@/shared/lib/classNames';
import AppLink from '@/shared/ui/AppLink/AppLink';
import { PlayPauseButton } from '@/shared/ui/Button/PlayPauseButton/PlayPauseButton';
import { HStack, VStack } from '@/shared/ui/Stack';
import { P } from '@/shared/ui/Typography';

import styles from './ShortsCard.module.scss';

interface IShortsCardProps {
  className?: string;
  id?: string;
  title?: string;
  imgUrl: string;
}

const ShortsCard: FC<IShortsCardProps> = ({ id = '', title, imgUrl, className }) => {
  return (
    <AppLink to={APP_ROUTES.playlist(id)} className={cn(styles.Card, className)}>
      <HStack>
        <div className={styles.image}>
          <img src={imgUrl} alt={title} draggable={false} loading={'lazy'} />
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

export default ShortsCard;
