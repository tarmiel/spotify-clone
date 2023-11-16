import { FC, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { getCurrentPlaylistId, getIsPlayerPlaying, playerActions } from '@/entities/Player';
import { useGetPlaylistByIdQuery } from '@/entities/Playlist';
import { PlaylistTable } from '@/features/Playlist';
import { APP_ROUTES } from '@/shared/const/router';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import AppLink from '@/shared/ui/AppLink/AppLink';
import { Avatar } from '@/shared/ui/Avatar';
import { PlayPauseButton } from '@/shared/ui/Button/PlayPauseButton/PlayPauseButton';
import { Icon } from '@/shared/ui/Icon';
import { VStack } from '@/shared/ui/Stack';
import { H1, Span } from '@/shared/ui/Typography';
import { NotFound } from '@/widgets/NotFound';
import { PageLoader } from '@/widgets/PageLoader';

import styles from './PlaylistPage.module.scss';

const PlaylistPage: FC = () => {
  const { id } = useParams<{ id: string }>();
  const isPlaying = useSelector(getIsPlayerPlaying);
  const currentPlayingPlaylistId = useSelector(getCurrentPlaylistId);
  const dispatch = useAppDispatch();

  const { data: playlist, isLoading } = useGetPlaylistByIdQuery(id || '', {
    skip: !id,
  });

  const handlePlayPause = useCallback(() => {
    if (currentPlayingPlaylistId !== playlist?.id) {
      return dispatch(
        playerActions.setPlayer({
          queue: playlist?.tracks.items,
          currentPlaylistId: playlist?.id,
          currentTrackIndex: 0,
          currentTrack: playlist?.tracks.items[0],
          isPlaying: true,
        }),
      );
    }

    dispatch(playerActions.playPause());
  }, [currentPlayingPlaylistId, dispatch, playerActions, playlist]);

  if (isLoading) return <PageLoader />;
  if (!playlist) return <NotFound />;

  const playlistImage =
    playlist?.images?.[0]?.sources.find((source) => source.width === 300)?.url || playlist?.images?.[0]?.sources[0].url;

  document.documentElement.style.setProperty(
    '--page-header-bg',
    playlist.images?.[0]?.extractedColors.colorDark.hex || 'rgb(83, 83, 83)',
  );

  return (
    <section className={styles.PlaylistPage}>
      <div className={styles.playlistHeader}>
        <div className={styles.headerbg}></div>
        <div className={styles.headerContent}>
          <div className={styles.image} key={playlist.id}>
            {/* <img src={playlistImage} alt={'playlist preview'} loading={'lazy'} /> */}
            <Avatar
              src={playlistImage}
              alt={'playlist preview'}
              fallBackIcon={<Icon type={'outlined'} name={'Melody'} width={64} height={64} />}
            />
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
          <PlayPauseButton
            size={'lg'}
            isActive={currentPlayingPlaylistId === playlist?.id && isPlaying}
            onClick={handlePlayPause}
          />
        </div>
        <PlaylistTable tracks={playlist.tracks.items} playlistId={playlist.id} />
      </div>
    </section>
  );
};

export default PlaylistPage;
