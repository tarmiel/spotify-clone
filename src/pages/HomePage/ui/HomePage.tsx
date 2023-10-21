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

  if (shortsSection && isAuthorized) {
    document.documentElement.style.setProperty(
      '--page-header-bg',
      shortsSection.items[0].image.extractedColors.colorDark.hex,
    );
  } else {
    document.documentElement.style.removeProperty('--page-header-bg');
  }

  const onChangeColorHandler = (color: string) => {
    document.documentElement.style.setProperty('--page-header-bg', color);
  };

  return (
    <div className={styles.HomePage}>
      <div className={styles.header}></div>
      <VStack gap={'32'} max className={styles.content}>
        {isAuthorized && shortsSection && <ShortsSection onChangeColor={onChangeColorHandler} {...shortsSection} />}
        {previewSections?.map((section) => <GenericSection key={section.id} {...section} />)}
      </VStack>
    </div>
  );
};

export default HomePage;
