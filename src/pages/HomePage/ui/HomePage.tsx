import React, { FC } from 'react';

import { MediaGrid } from '@/entities/Media';
import { ShortsList } from '@/features/Shorts';
import { sections } from '@/shared/data/sections';
import { VStack } from '@/shared/ui/Stack';
import { Section } from '@/widgets/Section';

import styles from './HomePage.module.scss';

const HomePage: FC = () => {
  return (
    <div className={styles.HomePage}>
      <div className={styles.header}></div>
      <VStack gap={'32'} max className={styles.content}>
        <Section title={'Welcome'} id={'qwert'}>
          <ShortsList />
        </Section>
        {sections.map((section) => (
          <Section key={section.id} title={section.title} id={section.id}>
            <MediaGrid mediaItems={section.sectionItems} />
          </Section>
        ))}
      </VStack>
    </div>
  );
};

export default HomePage;
