import React, { FC } from 'react';

import { shorts } from '@/shared/data/shorts';
import { cn } from '@/shared/lib/classNames';

import ShortsCard from '../ShortsCard/ShortsCard';

import styles from './ShortsList.module.scss';

interface IShortsListProps {
  className?: string;
}

const ShortsList: FC<IShortsListProps> = ({ className }) => {
  return (
    <div className={cn(styles.List, className)}>
      {shorts.map((short) => (
        <ShortsCard key={short.id} {...short} />
      ))}
    </div>
  );
};

export default ShortsList;
