import React, { FC } from 'react';
import { Navigate, useParams } from 'react-router-dom';

import { useGetPlaylistByIdQuery } from '@/entities/Playlist';
import { PlaylistTable } from '@/features/Playlist';
import { NotFoundPage } from '@/pages/NotFoundPage';
import { APP_ROUTES } from '@/shared/const/router';
import { tracks } from '@/shared/data/playlistTracks';
import AppLink from '@/shared/ui/AppLink/AppLink';
import { PlayPauseButton } from '@/shared/ui/Button/PlayPauseButton/PlayPauseButton';
import { Loader } from '@/shared/ui/Loader';
import { VStack } from '@/shared/ui/Stack';
import { H1, Span } from '@/shared/ui/Typography';
import { NotFound } from '@/widgets/NotFound';
import { PageLoader } from '@/widgets/PageLoader';

import styles from './PlaylistPage.module.scss';

const PlaylistPage: FC = () => {
  const { id } = useParams<{ id: string }>();

  const { data: playlist, isLoading } = useGetPlaylistByIdQuery(id || '', {
    skip: !id,
  });

  if (isLoading) return <PageLoader />;
  if (!playlist) return <NotFound />;

  document.documentElement.style.setProperty('--page-header-bg', playlist.images[0].extractedColors.colorDark.hex);

  return (
    <section className={styles.PlaylistPage}>
      <div className={styles.playlistHeader}>
        <div className={styles.headerbg}></div>
        <div className={styles.headerContent}>
          <div className={styles.image}>
            <img src={playlist?.images[0].sources[0].url} alt={'playlist preview'} loading={'lazy'} />
          </div>
          <VStack className={styles.playlistInfo}>
            <Span color={'base'} size={'sm'}>
              Playlist
            </Span>
            <H1 truncate size={'responsive'}>
              {playlist?.name}
            </H1>
            <Span color={'base'}>
              <AppLink to={APP_ROUTES.artist(playlist.owner.id)} size={'sm'} bold underline>
                {playlist?.owner.name}
              </AppLink>{' '}
              • {playlist.tracks.total} songs
            </Span>
          </VStack>
        </div>
      </div>
      <div className={styles.playlistContent}>
        <div className={styles.contentTopBg}></div>
        <div className={styles.controls}>
          <PlayPauseButton size={'lg'} />
        </div>
        <PlaylistTable tracks={playlist.tracks.items} />
      </div>
    </section>
  );
};

export default PlaylistPage;
