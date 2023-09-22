import React, { FC } from 'react';

import { cn } from '@/shared/lib/classNames';
import { Skeleton } from '@/shared/ui/Skeleton';
import { HStack, VStack } from '@/shared/ui/Stack';

import styles from './MediaCard.module.scss';

interface IMediaCardSkeletonProps {
  className?: string;
}

export const MediaCardSkeleton: FC<IMediaCardSkeletonProps> = ({ className }) => {
  return (
    <div className={cn(styles.MediaCard, className)}>
      <div className={styles.preview}>
        <Skeleton width={'100%'} height={'100%'} bgColor={'hsla(0 0 100% 0.1)'} />
      </div>
      <div className={styles.content}>
        <VStack gap={'8'}>
          <Skeleton width={'100%'} height={24} borderRadius={'16px'} />
          <Skeleton width={'60%'} height={24} borderRadius={'16px'} />
        </VStack>
      </div>
    </div>
  );
};
