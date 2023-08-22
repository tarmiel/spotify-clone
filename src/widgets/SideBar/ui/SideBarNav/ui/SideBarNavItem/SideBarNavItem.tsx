import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';

import { cn } from '@/shared/lib/classNames';

import { ISideBarNavItem } from '../../model/types/sideBarNav';

import styles from './SideBarNavItem.module.scss';

interface ISideBarNavItemProps extends ISideBarNavItem {
  className?: string;
  activeClassName?: string;
}

export const SideBarNavItem: FC<ISideBarNavItemProps> = ({
  path,
  text,
  activeIcon,
  inActiveIcon,
  className,
  activeClassName = styles.active,
}) => {
  return (
    <NavLink
      to={path}
      className={({ isActive }) => cn(styles.SideBarNavItem, { [activeClassName]: isActive }, className)}
      draggable={false}
    >
      {({ isActive }) =>
        isActive ? (
          <>
            {activeIcon} <span>{text}</span>
          </>
        ) : (
          <>
            {inActiveIcon} <span>{text}</span>
          </>
        )
      }
    </NavLink>
  );
};
