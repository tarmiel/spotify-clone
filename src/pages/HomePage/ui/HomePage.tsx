import React, { FC } from 'react';

import { MediaGrid } from '@/entities/Media';
import { sections } from '@/shared/data/sections';
import { VStack } from '@/shared/ui/Stack';
import { Section } from '@/widgets/Section';

const HomePage: FC = () => {
  return (
    <VStack gap={'32'} max>
      {sections.map((section) => (
        <Section key={section.id} title={section.title} id={section.id}>
          <MediaGrid mediaItems={section.sectionItems} />
        </Section>
      ))}
    </VStack>
  );
};

export default HomePage;
