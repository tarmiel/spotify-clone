import React, { FC } from 'react';

import { Track } from '@/entities/Track';
import { cn } from '@/shared/lib/classNames';
import { Icon } from '@/shared/ui/Icon';

import { PlaylistTrack } from '../../model/types/track';
import { PlaylistGrid } from '../PlaylistGrid/PlaylistGrid';
import { PlaylistRow } from '../PlaylistRow/PlaylistRow';

import styles from './PlaylistTable.module.scss';

interface IPlaylistTableProps {
  className?: string;
  tracks: Track[];
  playlistId: string;
}

const PlaylistTable: FC<IPlaylistTableProps> = ({ tracks, playlistId, className }) => {
  return (
    <table className={cn(styles.PlaylistTable, className)} key={playlistId}>
      <PlaylistGrid className={styles.tableHeader}>
        <th>#</th>
        <th>Title</th>
        <th>Album</th>
        <th>Date added</th>
        <th>
          <Icon type={'outlined'} name={'Clock'} />
        </th>
      </PlaylistGrid>
      {tracks.map((track, i) => (
        <PlaylistRow key={track.id} number={i + 1} track={track} playlistId={playlistId} />
      ))}
    </table>
  );
};

export default PlaylistTable;
