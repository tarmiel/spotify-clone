import React, { FC, memo } from 'react';
import { useSelector } from 'react-redux';

import { getCurrentTrack } from '@/entities/Player';
import { APP_ROUTES } from '@/shared/const/router';
import { cn } from '@/shared/lib/classNames';
import AppLink from '@/shared/ui/AppLink/AppLink';
import { IconButton, LikeButton } from '@/shared/ui/Button';
import { Icon } from '@/shared/ui/Icon';
import { VStack } from '@/shared/ui/Stack';
import { P, Span } from '@/shared/ui/Typography';

import styles from './PlayerPreview.module.scss';

interface IPlayerPreviewProps {
  className?: string;
}

export const PlayerPreview: FC<IPlayerPreviewProps> = memo(({ className }) => {
  const track = useSelector(getCurrentTrack);

  if (!track) return null;

  return (
    <div className={cn(styles.PlayerPreview, className)}>
      <div className={styles.image}>
        <div className={styles.fallback}>
          <Icon type={'outlined'} name={'Melody'} />
        </div>
        {/* <img
          width={56}
          height={56}
          src={'https://i.scdn.co/image/ab67616d0000485188917ce3d617aa8c71b29380'}
          aria-hidden="false"
          loading="eager"
          onError={(e) => (e.currentTarget.style.display = 'none')}
        /> */}
        <img
          width={56}
          height={56}
          src={track?.url}
          aria-hidden="false"
          loading="eager"
          onError={(e) => (e.currentTarget.style.display = 'none')}
        />
      </div>
      <div className={styles.content}>
        <P>
          <AppLink to={APP_ROUTES.track('track')} truncate underline size={'sm'}>
            {track?.name}
          </AppLink>
        </P>
        <Span truncate>
          {track.artists.map((artist) => (
            <>
              <AppLink key={artist.id} to={APP_ROUTES.artist('artist')} variant={'subdued'} size={'xs'} underline>
                {artist.name}
              </AppLink>{' '}
            </>
          ))}
        </Span>
      </div>
      <VStack justify={'center'} noShrink>
        {/* <IconButton icon={{ type: 'outlined', name: 'Heart' }} /> */}
        <LikeButton />
      </VStack>
    </div>
  );
});
