import React, { FC } from 'react';

import { APP_ROUTES } from '@/shared/const/router';
import { cn } from '@/shared/lib/classNames';
import AppLink from '@/shared/ui/AppLink/AppLink';
import { Span } from '@/shared/ui/Typography';

import styles from './GenreCard.module.scss';
interface IGenreCardProps {
  className?: string;
  id: string;
  label: string;
  backgroundColor?: string;
  img?: string;
}

const GenreCard: FC<IGenreCardProps> = ({ id, label, backgroundColor, img, className }) => {
  return (
    <AppLink
      to={APP_ROUTES.genre(id)}
      className={cn(styles.GenreCard, className)}
      draggable={false}
      style={{ backgroundColor: backgroundColor }}
    >
      <div>
        <img src={img} alt={label} loading={'lazy'} width={100} height={100} className={styles.image} />
        <Span size={'lg'} weight={'bold'} color={'base'} className={styles.label}>
          {label}
        </Span>
      </div>
    </AppLink>
  );
};

export default GenreCard;
