import React, { FC } from 'react';

import { cn } from '@/shared/lib/classNames';
import { Skeleton } from '@/shared/ui/Skeleton';
import { HStack, VStack } from '@/shared/ui/Stack';

import styles from './LibraryItem.module.scss';

interface ILibraryItemSkeletonProps {
  className?: string;
  collapsed?: boolean;
}

export const LibraryItemSkeleton: FC<ILibraryItemSkeletonProps> = ({ collapsed, className }) => {
  if (collapsed) {
    return (
      <li className={cn(styles.LibraryItem, className)}>
        <div className={cn(styles.image)}>
          <Skeleton width={'100%'} height={'100%'} borderRadius={'4px'} />
        </div>
      </li>
    );
  }

  return (
    <li className={cn(styles.LibraryItem, className)}>
      <div className={cn(styles.image)}>
        <Skeleton width={'100%'} height={'100%'} borderRadius={'4px'} />
      </div>
      <VStack max gap={'8'}>
        <Skeleton width={'60%'} height={16} borderRadius={'4px'} />
        <Skeleton width={'50%'} height={12} borderRadius={'4px'} />
      </VStack>
    </li>
  );
};
