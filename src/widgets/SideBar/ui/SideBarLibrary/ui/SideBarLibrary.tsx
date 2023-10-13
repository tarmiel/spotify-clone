import { FC, useMemo, useState } from 'react';

import { Library, useGetLibraryQuery } from '@/entities/Library';
import { ActionsDropDown } from '@/features/Library';
import { cn } from '@/shared/lib/classNames';
import { useAuth } from '@/shared/lib/hooks/useAuth/useAuth';
import { ClearButton } from '@/shared/ui/Button/ClearButton/ClearButton';
import { IconButton } from '@/shared/ui/Button/IconButton/IconButton';
import { Icon } from '@/shared/ui/Icon';
import { ISelectItem } from '@/shared/ui/Select/Select';
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

  const userPlaylistCount = useMemo(() => {
    return (
      library?.items.reduce((acc, item) => {
        if (item.type === 'playlist' && item.owner?.id === user?.id) return ++acc;
        return acc;
      }, 0) || 0
    );
  }, [library]);

  console.log(userPlaylistCount);

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
          {/* <IconButton icon={{ type: 'outlined', name: 'Plus' }} /> */}
          <ActionsDropDown userPlaylistCount={userPlaylistCount} />

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
