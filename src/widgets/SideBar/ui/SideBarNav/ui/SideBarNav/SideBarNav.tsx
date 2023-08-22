import { FC } from 'react';
import { Link } from 'react-router-dom';

import { APP_ROUTES } from '@/shared/const/router';
import { cn } from '@/shared/lib/classNames';

import { useSideBarNavItems } from '../../model/lib/getNavItems';
import { SideBarNavItem } from '../SideBarNavItem/SideBarNavItem';

import styles from './SideBarNav.module.scss';

interface ISideBarNavProps {
  className?: string;
}

export const SideBarNav: FC<ISideBarNavProps> = ({ className }) => {
  const navItems = useSideBarNavItems();

  return (
    <nav className={cn(styles.SideBarNav, className)}>
      {navItems.map(({ path, text, activeIcon, inActiveIcon }) => (
        <SideBarNavItem key={path} path={path} text={text} activeIcon={activeIcon} inActiveIcon={inActiveIcon} />
      ))}
    </nav>
  );
};
