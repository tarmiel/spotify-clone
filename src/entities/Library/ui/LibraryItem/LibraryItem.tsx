import React, { FC } from 'react';

import { cn } from '@/shared/lib/classNames';
import { Avatar } from '@/shared/ui/Avatar';
import { Icon } from '@/shared/ui/Icon';
import { HStack } from '@/shared/ui/Stack';
import { P, Span } from '@/shared/ui/Typography';

import styles from './LibraryItem.module.scss';
interface ILibraryItemProps {
  className?: string;
  collapsed?: boolean;
  image?: string;
  name?: string;
  pinned?: boolean;
  type?: string;
  songsCount?: number;
  owner?: string;
}

export const LibraryItem: FC<ILibraryItemProps> = ({
  collapsed,
  image,
  name,
  pinned,
  type,
  songsCount,
  owner,
  className,
}) => {
  const tags = [type, owner, songsCount];

  if (collapsed) {
    return (
      <li className={cn(styles.LibraryItem, className)} tabIndex={0}>
        <div className={cn(styles.image, { [styles.fallback]: !image })}>
          <Avatar
            rounded={type === 'Artist' ? 'full' : 'sm'}
            src={image}
            alt={name}
            fallBackIcon={<Icon type={'outlined'} name={'Melody'} width={24} height={24} />}
          />
        </div>
      </li>
    );
  }

  return (
    <li className={cn(styles.LibraryItem, className)} tabIndex={0}>
      <div className={cn(styles.image, { [styles.fallback]: !image })}>
        <Avatar
          rounded={type === 'Artist' ? 'full' : 'sm'}
          src={image}
          alt={name}
          fallBackIcon={<Icon type={'outlined'} name={'Melody'} width={24} height={24} />}
        />
      </div>
      <div className={styles.info}>
        <P truncate>{name}</P>
        <HStack gap={'8'}>
          {pinned && (
            <Icon type={'filled'} name={'Pin'} width={12} height={12} color={'var(--text-bright-accent,#117a37)'} />
          )}
          <Span truncate>{tags.filter((tag) => Boolean(tag)).join(' • ')}</Span>
        </HStack>
      </div>
    </li>
  );
};
