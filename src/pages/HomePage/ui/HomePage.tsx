import { FC } from 'react';

import {
  GenericSection,
  GenericSectionSkeleton,
  ShortsSection,
  ShortsSectionSkeleton,
  usePreviewSections,
} from '@/entities/Section';
import { useShortsSection } from '@/entities/Section';
import { useAuth } from '@/shared/lib/hooks/useAuth/useAuth';
import { VStack } from '@/shared/ui/Stack';

import styles from './HomePage.module.scss';

const HomePage: FC = () => {
  const { isAuthorized } = useAuth();
  const { isLoading: isLoadingPreview, data: previewSections } = usePreviewSections();
  const { isLoading: isLoadingSections, data: shortsSection } = useShortsSection(null, {
    skip: !isAuthorized,
  });

  if (isLoadingPreview || isLoadingSections)
    return (
      <div className={styles.HomePage}>
        <div className={styles.header}></div>
        <VStack gap={'32'} max className={styles.content}>
          <ShortsSectionSkeleton />
          <GenericSectionSkeleton />
          <GenericSectionSkeleton />
        </VStack>
      </div>
    );

  const headerBg = isAuthorized ? 'rgb(72 32 176)' : 'rgb(83 83 83)';

  return (
    <div className={styles.HomePage}>
      <div className={styles.header} style={{ '--page-header-bg': `${headerBg}` } as React.CSSProperties}></div>
      <VStack gap={'32'} max className={styles.content}>
        {isAuthorized && shortsSection && <ShortsSection {...shortsSection} />}
        {previewSections?.map((section) => <GenericSection key={section.id} {...section} />)}
      </VStack>
    </div>
  );
};

export default HomePage;
