import React, { FC } from 'react';

import { cn } from '@/shared/lib/classNames';
import { PlayPauseButton } from '@/shared/ui/Button';
import { Skeleton } from '@/shared/ui/Skeleton';
import { VStack } from '@/shared/ui/Stack';
import { P, Span } from '@/shared/ui/Typography';

import { SectionItem } from '../../model/types/section';

import styles from './GenericSectionItem.module.scss';

interface IGenericSectionItemSkeletonProps {
  className?: string;
}

export const GenericSectionItemSkeleton: FC<IGenericSectionItemSkeletonProps> = ({ className }) => {
  return (
    <div className={cn(styles.GenericSectionItem, className)}>
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
