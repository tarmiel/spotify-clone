import { FC } from 'react';

import { cn } from '@/shared/lib/classNames';
import { Skeleton } from '@/shared/ui/Skeleton';
import { HStack } from '@/shared/ui/Stack';

import { GenericSectionItemSkeleton } from '../GenericSectionItem/GenericSectionItemSkeleton';

import styles from './GenericSection.module.scss';

interface IGenericSectionSkeletonProps {
  className?: string;
}

const genericSectionSkeleton = () => new Array(6).fill(0).map((_, index) => <GenericSectionItemSkeleton key={index} />);

export const GenericSectionSkeleton: FC<IGenericSectionSkeletonProps> = ({ className }) => {
  return (
    <section className={cn(styles.GenericSection, className)}>
      <HStack justify={'between'} className={styles.header}>
        <Skeleton width={250} height={24} borderRadius={500} marginBottom={8} />
      </HStack>
      <div className={cn(styles.SectionGrid)}>{genericSectionSkeleton()}</div>
    </section>
  );
};
