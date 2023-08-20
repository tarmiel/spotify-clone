import React, { FC } from 'react';

import { cn } from '@/shared/lib/classNames';

import SideBarBlock from '../SideBarBlock/SideBarBlock';
import SideBarNav from '../SideBarNav/SideBarNav/SideBarNav';

import styles from './SideBar.module.scss';
interface ISideBarProps {
  className?: string;
}

const SideBar: FC<ISideBarProps> = ({ className }) => {
  return (
    <aside className={cn(styles.SideBar, className)}>
      <SideBarBlock>
        <SideBarNav />
      </SideBarBlock>
      <SideBarBlock></SideBarBlock>
    </aside>
  );
};

export default SideBar;
