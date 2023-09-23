import { FC } from 'react';

import { cn } from '@/shared/lib/classNames';
import { Skeleton } from '@/shared/ui/Skeleton';
import { HStack } from '@/shared/ui/Stack';

import styles from './ShortsSectionItem.module.scss';

interface IShortsItemSkeletonProps {
  className?: string;
}

export const ShortsItemSkeleton: FC<IShortsItemSkeletonProps> = ({ className }) => {
  return (
    <HStack className={cn(styles.ShortsSectionItem, className)}>
      <div className={styles.image}>
        <Skeleton width={'100%'} height={'100%'} bgColor={'#575757'} />
      </div>
      <HStack className={styles.content} justify={'between'}>
        <Skeleton width={'100%'} height={24} bgColor={'#464646'} borderRadius={'16px'} />
      </HStack>
    </HStack>
  );
};
