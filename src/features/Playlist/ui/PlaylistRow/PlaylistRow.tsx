import React, { FC } from 'react';

import { Track } from '@/entities/Track';
import { APP_ROUTES } from '@/shared/const/router';
import { cn } from '@/shared/lib/classNames';
import { convertMsToTime } from '@/shared/lib/timeConverter';
import AppLink from '@/shared/ui/AppLink/AppLink';
import { IconButton } from '@/shared/ui/Button/IconButton/IconButton';
import { Icon } from '@/shared/ui/Icon';
import { HStack, VStack } from '@/shared/ui/Stack';
import { P, Span } from '@/shared/ui/Typography';

import { PlaylistTrack } from '../../model/types/track';
import { PlaylistGrid } from '../PlaylistGrid/PlaylistGrid';

import styles from './PlaylistRow.module.scss';

interface IPlaylistRowProps {
  className?: string;
  number: number;
  track: Track;
}

export const PlaylistRow: FC<IPlaylistRowProps> = ({ number, track, className }) => {
  const coverImg = track.album?.images.find((image) => image.width === 64) || track.album?.images[0];

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
          <img src={coverImg?.url} alt={track.name} width={40} height={40} />
          <VStack>
            <AppLink to={APP_ROUTES.track(track.id)} underline truncate>
              {track.name}
            </AppLink>
            <div className={styles.artistsList}>
              {track.artists.map((artist) => (
                <AppLink
                  key={artist.id}
                  to={APP_ROUTES.artist(artist.id)}
                  underline
                  variant={'subdued'}
                  size={'sm'}
                  truncate
                >
                  {artist.name}
                </AppLink>
              ))}
            </div>
          </VStack>
        </HStack>
      </td>
      <td>
        {track.album && (
          <AppLink to={APP_ROUTES.album(track.album.id)} underline variant={'subdued'} size={'sm'} truncate>
            {track.album.name}
          </AppLink>
        )}
      </td>
      <td></td>
      <td>
        <HStack gap={'32'} justify={'between'} max>
          <IconButton icon={{ type: 'outlined', name: 'Heart' }} className={styles.likeBtn} />
          <Span>{convertMsToTime(track.duration_ms)}</Span>
          <IconButton icon={{ type: 'outlined', name: 'DotsHorizontal' }} className={styles.contextBtn} />
        </HStack>
      </td>
    </PlaylistGrid>
  );
};
