import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';

import { APP_ROUTES } from '@/shared/const/router';
import { cn } from '@/shared/lib/classNames';
import AppLink from '@/shared/ui/AppLink/AppLink';
import { Avatar } from '@/shared/ui/Avatar';
import { ContextMenu } from '@/shared/ui/ContextMenu';
import { Icon } from '@/shared/ui/Icon';
import { HStack } from '@/shared/ui/Stack';
import { P, Span } from '@/shared/ui/Typography';

import { useRemovePlaylistMutation } from '../../api/library';
import { ILibraryItem } from '../../model/types/library';

import styles from './LibraryItem.module.scss';
interface ILibraryItemProps extends ILibraryItem {
  className?: string;
  collapsed?: boolean;
  isPlaying?: boolean;
}

export const LibraryItem: FC<ILibraryItemProps> = ({
  collapsed,
  image,
  name,
  pinned,
  type,
  count,
  owner,
  id,
  isPlaying,
  className,
}) => {
  const [removeFromLibrary] = useRemovePlaylistMutation();

  const MType = type === 'collection' ? 'Playlist' : type[0].toUpperCase() + type.slice(1);

  const tags = [MType, owner?.name];

  let content;

  if (!collapsed) {
    content = (
      <div className={styles.info}>
        <P truncate>{name}</P>
        <HStack gap={'8'}>
          {pinned && (
            <Icon
              type={'filled'}
              name={'Pin'}
              width={12}
              height={12}
              color={'var(--text-bright-accent,#117a37)'}
              style={{ flexShrink: 0 }}
            />
          )}
          <Span truncate>{tags.filter((tag) => Boolean(tag)).join(' • ')}</Span>
        </HStack>
      </div>
    );
  }

  return (
    <ContextMenu
      items={[
        {
          content: 'Delete',
          onClick: () => removeFromLibrary(id),
          disabled: type === 'collection',
        },
      ]}
    >
      <NavLink
        to={APP_ROUTES.playlist(id)}
        className={({ isActive }) => cn(styles.libraryItemLink, { [styles.activeLink]: isActive })}
        draggable={false}
      >
        <li className={cn(styles.LibraryItem, className)}>
          <div className={cn(styles.image, { [styles.fallback]: !image })}>
            <Avatar
              rounded={type === 'artist' ? 'full' : 'sm'}
              src={image?.sources[0].url}
              alt={name}
              fallBackIcon={<Icon type={'outlined'} name={'Melody'} width={24} height={24} />}
            />
          </div>
          {content}
          {isPlaying && (
            <div className={styles.nowPlaying}>
              <Icon type={'filled'} name={'NowPlaying'} />
            </div>
          )}
        </li>
      </NavLink>
    </ContextMenu>
  );
};
