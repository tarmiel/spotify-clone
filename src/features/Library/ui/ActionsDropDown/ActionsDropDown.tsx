import React, { FC } from 'react';

import { useCreatePlaylistMutation } from '@/entities/Library';
import { cn } from '@/shared/lib/classNames';
import { IconButton } from '@/shared/ui/Button';
import { DropDown, DropdownItem } from '@/shared/ui/DropDown';
import { Icon } from '@/shared/ui/Icon';

interface IActionsDropDownProps {
  className?: string;
  userPlaylistCount: number;
}

export const ActionsDropDown: FC<IActionsDropDownProps> = ({ userPlaylistCount, className }) => {
  const [createNewPlaylist] = useCreatePlaylistMutation();

  const actions: DropdownItem[] = [
    {
      content: (
        <>
          <Icon type={'outlined'} name={'Melody'} />
          Create New Playlist
        </>
      ),
      onClick: () => createNewPlaylist(userPlaylistCount),
    },
  ];

  return (
    <DropDown
      trigger={<IconButton icon={{ type: 'outlined', name: 'Plus' }} />}
      items={actions}
      direction={'bottom right'}
    />
  );
};
