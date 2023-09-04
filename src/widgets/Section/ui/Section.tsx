import React, { FC, ReactNode } from 'react';

import { APP_ROUTES } from '@/shared/const/router';
import { cn } from '@/shared/lib/classNames';
import AppLink from '@/shared/ui/AppLink/AppLink';
import { HStack } from '@/shared/ui/Stack';
import { H2 } from '@/shared/ui/Typography';

import styles from './Section.module.scss';

interface ISectionProps {
  className?: string;
  title: string;
  id: string;
  children: ReactNode;
}

const Section: FC<ISectionProps> = ({ id, title, children, className }) => {
  return (
    <section className={cn(styles.Section, className)}>
      <HStack justify={'between'}>
        <H2>{title}</H2>
        <AppLink to={APP_ROUTES.section(id)} variant={'subdued'} underline bold size={'sm'}>
          Show all
        </AppLink>
      </HStack>
      {children}
    </section>
  );
};

export default Section;
