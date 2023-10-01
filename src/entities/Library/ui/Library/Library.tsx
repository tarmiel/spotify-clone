import React, { FC } from 'react';

import { cn } from '@/shared/lib/classNames';

import { ILibraryItem } from '../../model/types/library';
import { LibraryItem } from '../LibraryItem/LibraryItem';
import { LibraryItemSkeleton } from '../LibraryItem/LibraryItemSkeleton';

import styles from './Library.module.scss';

interface ILibraryProps {
  className?: string;
  collapsed?: boolean;
  isLoading?: boolean;
  items?: ILibraryItem[];
}

const Litems = [
  {
    name: 'Liked Songs',
    image: 'https://misc.scdn.co/liked-songs/liked-songs-64.png',
    type: 'Playlist',
    owner: 'Oleg',
    pinned: true,
    songsCount: 123,
  },
  {
    name: 'My playlist',
    type: 'Playlist',
    owner: 'Oleg',
    pinned: true,
    songsCount: 0,
  },
  {
    name: 'Daily Mix 4',
    image: 'https://dailymix-images.scdn.co/v2/img/ab6761610000e5ebb70ea183f39bfb83201950d9/4/en/default',
    type: 'Playlist',
    owner: 'Spotify',
    pinned: false,
  },
  {
    name: 'Watsebha',
    image: 'https://i.scdn.co/image/ab6761610000e5ebcdc08c8747d06a85498bb37d',
    type: 'Artist',
    pinned: false,
  },
];

const getSkeletons = (collapsed?: boolean) =>
  new Array(6).fill(0).map((item, index) => <LibraryItemSkeleton key={index} collapsed={collapsed} />);

const Library: FC<ILibraryProps> = ({ isLoading, className, collapsed, items }) => {
  if (isLoading) {
    return (
      <ul className={cn(styles.Library, className, { [styles.collapsed]: collapsed })}>{getSkeletons(collapsed)}</ul>
    );
  }

  if (!items) {
    return null;
  }

  return (
    <ul className={cn(styles.Library, className, { [styles.collapsed]: collapsed })}>
      {items?.map((item) => <LibraryItem key={item.name} {...item} collapsed={collapsed} />)}
    </ul>
  );
};

export default Library;
