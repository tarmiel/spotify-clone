import React, { FC } from 'react';

import { PlaylistTable } from '@/features/Playlist';
import { APP_ROUTES } from '@/shared/const/router';
import { tracks } from '@/shared/data/playlistTracks';
import AppLink from '@/shared/ui/AppLink/AppLink';
import { PlayPauseButton } from '@/shared/ui/Button/PlayPauseButton/PlayPauseButton';
import { VStack } from '@/shared/ui/Stack';
import { H1, Span } from '@/shared/ui/Typography';

import styles from './PlaylistPage.module.scss';

const PlaylistPage: FC = () => {
  return (
    <section className={styles.PlaylistPage}>
      <div className={styles.playlistHeader}>
        <div className={styles.headerbg}></div>
        <div className={styles.headerContent}>
          <div className={styles.image}>
            <img src={'https://t.scdn.co/images/3099b3803ad9496896c43f22fe9be8c4.png'} />
          </div>
          <VStack className={styles.playlistInfo}>
            <Span color={'base'} size={'sm'}>
              Playlist
            </Span>
            <H1 truncate size={'responsive'}>
              Liked Songs
            </H1>
            <Span color={'base'}>
              <AppLink to={APP_ROUTES.user('1')} size={'sm'} bold underline>
                Oleg
              </AppLink>{' '}
              • 123 songs
            </Span>
          </VStack>
        </div>
      </div>
      <div className={styles.playlistContent}>
        <div className={styles.contentTopBg}></div>
        <div className={styles.controls}>
          <PlayPauseButton size={'lg'} />
        </div>
        <PlaylistTable tracks={tracks} />
      </div>
    </section>
  );
};

export default PlaylistPage;
