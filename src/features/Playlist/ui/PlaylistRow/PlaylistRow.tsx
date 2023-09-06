import React, { FC } from 'react';

import { APP_ROUTES } from '@/shared/const/router';
import { cn } from '@/shared/lib/classNames';
import AppLink from '@/shared/ui/AppLink/AppLink';
import { IconButton } from '@/shared/ui/Button/IconButton/IconButton';
import { Icon } from '@/shared/ui/Icon';
import { HStack, VStack } from '@/shared/ui/Stack';
import { Span } from '@/shared/ui/Typography';

import { PlaylistTrack } from '../../model/types/track';
import { PlaylistGrid } from '../PlaylistGrid/PlaylistGrid';

import styles from './PlaylistRow.module.scss';

interface IPlaylistRowProps {
  className?: string;
  number: number;
  track: PlaylistTrack;
}

export const PlaylistRow: FC<IPlaylistRowProps> = ({ number, track, className }) => {
  return (
    <PlaylistGrid className={cn(styles.PlaylistRow, className)}>
      <td>
        <div className={styles.control}>
          <Span size={'md'} className={styles.num}>
            {number}
          </Span>
          <IconButton icon={{ type: 'filled', name: 'Play' }} className={styles.playBtn} />
        </div>
      </td>
      <td>
        <HStack gap={'16'} className={styles.info}>
          <img src={track.info.album.image} alt={track.info.name} width={40} height={40} />
          <VStack>
            <AppLink to={APP_ROUTES.track(track.info.id)} underline>
              {track.info.name}
            </AppLink>
            <div>
              {track.info.artists.map((artist) => (
                <AppLink key={artist.id} to={APP_ROUTES.artist(artist.id)} underline variant={'subdued'} size={'sm'}>
                  {artist.name}
                </AppLink>
              ))}
            </div>
          </VStack>
        </HStack>
      </td>
      <td>
        <AppLink to={APP_ROUTES.album(track.info.album.id)} underline variant={'subdued'} size={'sm'}>
          {track.info.album.name}
        </AppLink>
      </td>
      <td></td>
      <td>
        <HStack gap={'32'} justify={'between'} max>
          <IconButton icon={{ type: 'outlined', name: 'Heart' }} />
          <Span>3:16</Span>
          <IconButton icon={{ type: 'outlined', name: 'DotsHorizontal' }} className={styles.contextBtn} />
        </HStack>
      </td>
    </PlaylistGrid>
  );
};
