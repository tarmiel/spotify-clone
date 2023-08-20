import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { Link, useLocation } from 'react-router-dom';

import { APP_ROUTES } from '@/shared/const/router';
import { cn } from '@/shared/lib/classNames';

import { useSideBarNavItems } from '../model/lib/getNavItems';

import styles from './SideBarNav.module.scss';

interface ISideBarNavProps {
  className?: string;
}

const SideBarNav: FC<ISideBarNavProps> = ({ className }) => {
  const navItems = useSideBarNavItems();

  return (
    <nav>
      <ul></ul>
    </nav>
  );
};

export default SideBarNav;
