import React, { FC } from 'react';

import { genres } from '@/shared/data/genres';
import { cn } from '@/shared/lib/classNames';
import { H2 } from '@/shared/ui/Typography';

import GenreCard from '../GenreCard/GenreCard';

import styles from './GenreList.module.scss';

interface IGenreListProps {
  className?: string;
  title?: string;
  genres?: object;
}

const GenreList: FC<IGenreListProps> = ({ title, className }) => {
  return (
    <div className={cn(styles.GenreList, className)}>
      <H2>{title}</H2>
      <div className={styles.container}>
        {genres.map((genre) => (
          <GenreCard key={genre.id} {...genre} />
        ))}
      </div>
    </div>
  );
};

export default GenreList;
