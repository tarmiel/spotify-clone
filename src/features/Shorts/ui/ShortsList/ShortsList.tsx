import React, { FC } from 'react';

import { shorts } from '@/shared/data/shorts';
import { cn } from '@/shared/lib/classNames';

import ShortsCard from '../ShortsCard/ShortsCard';
import { ShortsCardSkeleton } from '../ShortsCard/ShortsCardSkeleton';

import styles from './ShortsList.module.scss';

interface IShortsListProps {
  className?: string;
  isLoading?: boolean;
}

const getSkeletons = () => new Array(6).fill(0).map((item, index) => <ShortsCardSkeleton key={index} />);

const ShortsList: FC<IShortsListProps> = ({ isLoading, className }) => {
  console.log(getSkeletons());

  if (isLoading) {
    return <div className={cn(styles.List, className)}>{getSkeletons()}</div>;
  }

  return (
    <div className={cn(styles.List, className)}>
      {shorts.map((short) => (
        <ShortsCard key={short.id} {...short} />
      ))}
    </div>
  );
};

export default ShortsList;
