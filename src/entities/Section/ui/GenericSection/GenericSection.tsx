import React, { FC, ReactNode, useEffect, useRef } from 'react';

import { APP_ROUTES } from '@/shared/const/router';
import { cn } from '@/shared/lib/classNames';
import AppLink from '@/shared/ui/AppLink/AppLink';
import { HStack } from '@/shared/ui/Stack';
import { H2 } from '@/shared/ui/Typography';

import { SectionItem } from '../../model/types/section';
import { GenericSectionItem } from '../GenericSectionItem/GenericSectionItem';

import styles from './GenericSection.module.scss';

interface IGenericSectionProps {
  title: string;
  id?: string;
  items?: SectionItem[];
  className?: string;
}

export const GenericSection: FC<IGenericSectionProps> = ({ title, id, items, className }) => {
  return (
    <section className={cn(styles.GenericSection, className)}>
      <HStack justify={'between'} className={styles.header}>
        <H2>{title}</H2>
        {id && (
          <AppLink to={APP_ROUTES.section(id)} variant={'subdued'} underline bold size={'sm'}>
            Show all
          </AppLink>
        )}
      </HStack>
      <div className={cn(styles.SectionGrid)}>
        {items?.map((item) => <GenericSectionItem key={item.id} {...item} />)}
      </div>
    </section>
  );
};
