import React, { FC, useState } from 'react';

import { ILibrary, ILibraryItem, Library, useAddToLibraryMutation, useGetLibraryQuery } from '@/entities/Library';
import { APP_ROUTES } from '@/shared/const/router';
import { cn } from '@/shared/lib/classNames';
import { useAuth } from '@/shared/lib/hooks/useAuth/useAuth';
import AppLink from '@/shared/ui/AppLink/AppLink';
import { ClearButton } from '@/shared/ui/Button/ClearButton/ClearButton';
import { IconButton } from '@/shared/ui/Button/IconButton/IconButton';
import { Icon } from '@/shared/ui/Icon';
import Select, { ISelectItem } from '@/shared/ui/Select/Select';
import { HStack } from '@/shared/ui/Stack';

import { SideBarAdSections } from '../../SideBarAdSections/SideBarAdSections';

import styles from './SideBarLibrary.module.scss';

interface ISideBarLibraryProps {
  className?: string;
  collapsed?: boolean;
  onCollapse?: () => void;
}

const selectItems: ISelectItem<string>[] = [
  { value: 'Recents', content: 'Recents' },
  { value: 'Recently Added', content: 'Recently Added' },
  { value: 'Alphabetical', content: 'Alphabetical' },
  { value: 'Creator', content: 'Creator' },
];

export const SideBarLibrary: FC<ISideBarLibraryProps> = ({ collapsed, onCollapse, className }) => {
  const [sortByValue, setSortByValue] = useState(selectItems[0].value);
  const { user, isAuthorized } = useAuth();
  const { isLoading, data: library } = useGetLibraryQuery(null, {
    skip: !isAuthorized,
  });

  const [addToLibrary, result] = useAddToLibraryMutation();

  // console.log(result);

  const newLibraryItem: Omit<ILibraryItem, 'id'> = {
    name: 'My playlist №1',
    addedAt: { isoString: '' },
    type: 'playlist',
    pinned: false,
    owner: {
      id: user!.id,
      name: '',
      type: 'User',
    },
  };

  if (collapsed) {
    return (
      <div className={cn(styles.SideBarLibrary, className)}>
        <header className={styles.header}>
          <ClearButton withIcon onClick={onCollapse}>
            <Icon type={'filled'} name={'Library'} width={24} height={24} />
          </ClearButton>
        </header>
        {isAuthorized && <Library collapsed={collapsed} isLoading={isLoading} items={library?.items} />}
      </div>
    );
  }

  return (
    <div className={cn(styles.SideBarLibrary, className)}>
      <header className={styles.header}>
        <ClearButton withIcon onClick={onCollapse}>
          <Icon type={'filled'} name={'Library'} width={24} height={24} /> Your Library
        </ClearButton>
        <HStack gap={'8'}>
          <IconButton icon={{ type: 'outlined', name: 'Plus' }} onClick={() => addToLibrary(newLibraryItem)} />

          <IconButton icon={{ type: 'outlined', name: 'ArrowRight' }} />
        </HStack>
      </header>

      {/* <HStack justify={'between'} style={{ padding: '0 16px' }}>
        <Select value={sortByValue} onChange={setSortByValue} items={selectItems} label={'Sort By'} />
      </HStack> */}

      {isAuthorized ? (
        <Library collapsed={collapsed} isLoading={isLoading} items={library?.items} />
      ) : (
        <SideBarAdSections />
      )}
    </div>
  );
};
