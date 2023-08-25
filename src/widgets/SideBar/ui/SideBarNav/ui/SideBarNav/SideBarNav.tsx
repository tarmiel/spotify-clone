import { FC } from 'react';

import { cn } from '@/shared/lib/classNames';

import { useSideBarNavItems } from '../../model/lib/getNavItems';
import { SideBarNavItem } from '../SideBarNavItem/SideBarNavItem';

import styles from './SideBarNav.module.scss';

interface ISideBarNavProps {
  className?: string;
  collapsed?: boolean;
}

export const SideBarNav: FC<ISideBarNavProps> = ({ collapsed, className }) => {
  const navItems = useSideBarNavItems();

  return (
    <nav className={cn(styles.SideBarNav, className)}>
      {navItems.map(({ path, text, activeIcon, inActiveIcon }) => (
        <SideBarNavItem
          key={path}
          path={path}
          text={!collapsed ? text : undefined}
          activeIcon={activeIcon}
          inActiveIcon={inActiveIcon}
        />
      ))}
    </nav>
  );
};
