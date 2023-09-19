import React, { FC } from 'react';

import { APP_ROUTES } from '@/shared/const/router';
import { cn } from '@/shared/lib/classNames';
import AppLink from '@/shared/ui/AppLink/AppLink';
import { IconButton } from '@/shared/ui/Button';
import { Icon } from '@/shared/ui/Icon';
import { VStack } from '@/shared/ui/Stack';
import { P, Span } from '@/shared/ui/Typography';

import styles from './PlayerPreview.module.scss';

interface IPlayerPreviewProps {
  className?: string;
}

export const PlayerPreview: FC<IPlayerPreviewProps> = ({ className }) => {
  return (
    <div className={cn(styles.PlayerPreview, className)}>
      <div className={styles.image}>
        <div className={styles.fallback}>
          <Icon type={'outlined'} name={'Melody'} />
        </div>
        <img
          width={56}
          height={56}
          src={'https://i.scdn.co/image/ab67616d0000485188917ce3d617aa8c71b29380'}
          aria-hidden="false"
          loading="eager"
          onError={(e) => (e.currentTarget.style.display = 'none')}
        />
      </div>
      <div className={styles.content}>
        <P>
          <AppLink to={APP_ROUTES.track('track')} truncate underline size={'sm'}>
            Title
          </AppLink>
        </P>
        <Span truncate>
          <AppLink to={APP_ROUTES.artist('artist')} variant={'subdued'} size={'xs'} underline>
            Artist
          </AppLink>
          {', '}
          <AppLink to={APP_ROUTES.artist('artist')} variant={'subdued'} size={'xs'} underline>
            Artist
          </AppLink>
        </Span>
      </div>
      <VStack justify={'center'} noShrink>
        <IconButton icon={{ type: 'outlined', name: 'Heart' }} />
      </VStack>
    </div>
  );
};
