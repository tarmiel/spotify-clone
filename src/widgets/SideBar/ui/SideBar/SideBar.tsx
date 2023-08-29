import React, { FC, useState } from 'react';

import { cn } from '@/shared/lib/classNames';

import SideBarBlock from '../SideBarBlock/SideBarBlock';
import { SideBarLibrary } from '../SideBarLibrary/ui/SideBarLibrary';
import { SideBarNav } from '../SideBarNav';

import styles from './SideBar.module.scss';

interface ISideBarProps {
  className?: string;
}

const SideBar: FC<ISideBarProps> = ({ className }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const handleCollapse = () => {
    const newWidth = isCollapsed ? '280' : '72';
    document.documentElement.style.setProperty('--left-sidebar-width', newWidth + 'px');

    setIsCollapsed((prev) => !prev);
  };

  return (
    <aside className={cn(styles.SideBar, className)}>
      <SideBarBlock>
        <SideBarNav collapsed={isCollapsed} />
      </SideBarBlock>
      <SideBarBlock>
        <SideBarLibrary collapsed={isCollapsed} onCollapse={handleCollapse} />
      </SideBarBlock>
    </aside>
  );
};

export default SideBar;
