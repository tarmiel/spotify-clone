import React, { FC } from 'react';

import { SecondaryButton } from '@/shared/ui/Button/SecondaryButton/SecondaryButton';
import { VStack } from '@/shared/ui/Stack';
import { P, Text } from '@/shared/ui/Typography';

import { SideBarSubBlock } from '../SideBarSubBlock/SideBarSubBlock';

import styles from './SideBarAdSections.module.scss';

interface ISideBarAdSectionsProps {
  className?: string;
}

export const SideBarAdSections: FC<ISideBarAdSectionsProps> = ({ className }) => {
  return (
    <VStack className={styles.Sections} gap={'16'} max>
      <SideBarSubBlock className={styles.section}>
        <VStack className={styles.content} gap={'8'}>
          <Text as={'h3'} size={'md'}>
            Create your first palylist!
          </Text>
          <P size={'sm'}>{"It's easy, we'll help you"}</P>
        </VStack>
        <SecondaryButton size={'sm'}>Create Playlist</SecondaryButton>
      </SideBarSubBlock>
      <SideBarSubBlock className={styles.section}>
        <VStack className={styles.content} gap={'8'}>
          <Text as={'h3'} size={'md'}>
            {"Let's find some podcasts to follow"}
          </Text>
          <P size={'sm'}>{"We'll keep you updated on new episodes"}</P>
        </VStack>
        <SecondaryButton size={'sm'}>Browse Podcasts</SecondaryButton>
      </SideBarSubBlock>
    </VStack>
  );
};
