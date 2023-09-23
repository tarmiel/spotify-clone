import React, { FC } from 'react';

import { cn } from '@/shared/lib/classNames';
import { H2 } from '@/shared/ui/Typography';

import { SectionItem } from '../../model/types/section';
import ShortsSectionItem from '../ShortsSectionItem/ShortsSectionItem';

import styles from './ShortsSection.module.scss';

interface IShortsSectionProps {
  className?: string;
  title: string;
  items: SectionItem[];
}

export const ShortsSection: FC<IShortsSectionProps> = ({ title, items, className }) => {
  return (
    <section className={cn(styles.ShortsSection, className)}>
      <H2 className={styles.title}>{title}</H2>
      <div className={cn(styles.ShortsSectionGrid)}>
        {items?.map((item) => <ShortsSectionItem key={item.id} {...item} />)}
      </div>
    </section>
  );
};
