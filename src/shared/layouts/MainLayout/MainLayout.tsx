import { memo, ReactElement } from 'react';
import { Outlet } from 'react-router-dom';

import { cn } from '@/shared/lib/classNames/classNames';
import { LayoutResizer } from '@/shared/ui/LayoutResizer/LayoutResizer';
import { SideBar } from '@/widgets/SideBar';

import styles from './MainLayout.module.scss';

export const MainLayout = memo(() => {
  return (
    <div className={cn(styles.MainLayout)} data-right-sidebar-hidden="true">
      <div className={styles.sidebar}>
        <SideBar />
        {/* <LayoutResizer min={280} max={1000} inline={'end'} property={'--left-sidebar-width'} /> */}
      </div>
      <div className={styles.content}>
        <Outlet />
      </div>
      {/* <div className={styles.rightbar}>{rightbar}</div> */}
      <div className={styles.footer}></div>
    </div>
  );
});
