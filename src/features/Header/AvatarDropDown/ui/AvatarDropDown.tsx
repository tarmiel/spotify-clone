import React, { FC, Fragment, useCallback } from 'react';
import { Menu } from '@headlessui/react';

// eslint-disable-next-line no-restricted-imports
import { logout } from '@/entities/Session/model/services/logoutThunk';
import { APP_ROUTES } from '@/shared/const/router';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useAuth } from '@/shared/lib/hooks/useAuth/useAuth';
import { Avatar } from '@/shared/ui/Avatar';
import { IconButton } from '@/shared/ui/Button';
import { DropDown } from '@/shared/ui/DropDown';
import { DropdownItem } from '@/shared/ui/DropDown/ui/DropDown';

interface IAvatarDropDownProps {
  className?: string;
}

export const AvatarDropDown: FC<IAvatarDropDownProps> = ({ className }) => {
  const dispatch = useAppDispatch();
  const { user } = useAuth();
  const logOut = useCallback(() => {
    dispatch(logout());
  }, [dispatch]);

  if (!user) {
    return null;
  }

  const items: DropdownItem[] = [
    {
      content: 'Profile',
      href: APP_ROUTES.user(user.id),
    },
    {
      content: 'Settings',
      divide: true,
      href: APP_ROUTES.preferences,
    },
    {
      content: 'Log Out',
      onClick: logOut,
    },
  ];

  return <DropDown trigger={<IconButton icon={{ type: 'outlined', name: 'User' }} variant={'bg'} />} items={items} />;
};
