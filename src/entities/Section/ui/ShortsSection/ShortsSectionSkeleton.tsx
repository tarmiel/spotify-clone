import { FC } from 'react';

import { cn } from '@/shared/lib/classNames';
import { Skeleton } from '@/shared/ui/Skeleton';

import { ShortsItemSkeleton } from '../ShortsSectionItem/ShortsItemSkeleton';

import styles from './ShortsSection.module.scss';

interface IShortsSectionProps {
  className?: string;
}

const shortsItemSkeletons = () => new Array(6).fill(0).map((_, index) => <ShortsItemSkeleton key={index} />);

export const ShortsSectionSkeleton: FC<IShortsSectionProps> = ({ className }) => {
  return (
    <section className={cn(styles.ShortsSection, className)}>
      <Skeleton width={350} height={48} marginBottom={16} bgColor={'#333'} borderRadius={'500px'} />
      <div className={cn(styles.ShortsSectionGrid)}>{shortsItemSkeletons()}</div>
    </section>
  );
};
