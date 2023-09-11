import React, { FC, useState } from 'react';

import { Library } from '@/entities/Library';
import { cn } from '@/shared/lib/classNames';
import { ClearButton } from '@/shared/ui/Button/ClearButton/ClearButton';
import { IconButton } from '@/shared/ui/Button/IconButton/IconButton';
import { Icon } from '@/shared/ui/Icon';
import Select, { ISelectItem } from '@/shared/ui/Select/Select';
import { HStack } from '@/shared/ui/Stack';

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

  if (collapsed) {
    return (
      <div className={cn(styles.SideBarLibrary, className)}>
        <header className={styles.header}>
          <ClearButton withIcon onClick={onCollapse}>
            <Icon type={'filled'} name={'Library'} width={24} height={24} />
          </ClearButton>
        </header>
        <Library collapsed={collapsed} />
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
          <IconButton icon={{ type: 'outlined', name: 'Plus' }} />
          <IconButton icon={{ type: 'outlined', name: 'ArrowRight' }} />
        </HStack>
      </header>

      <HStack justify={'between'} style={{ padding: '0 16px' }}>
        <Select value={sortByValue} onChange={setSortByValue} items={selectItems} label={'Sort By'} />
      </HStack>

      <Library collapsed={collapsed} />
    </div>
  );
};
