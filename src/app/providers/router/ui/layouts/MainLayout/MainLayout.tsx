import { memo, ReactElement, Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { cn } from '@/shared/lib/classNames/classNames';
import { LayoutResizer } from '@/shared/ui/LayoutResizer/LayoutResizer';
import { Footer } from '@/widgets/Footer';
import { Header } from '@/widgets/Header';
import { PageLoader } from '@/widgets/PageLoader';
import { SideBar } from '@/widgets/SideBar';

import styles from './MainLayout.module.scss';

export const MainLayout = memo(() => {
  return (
    <div className={cn(styles.MainLayout)} data-right-sidebar-hidden="true">
      <div className={styles.sidebar}>
        <SideBar />
        {/* <LayoutResizer min={280} max={584} inline={'end'} property={'--left-sidebar-width'} /> */}
      </div>
      <div className={styles.header}>
        <Header />
      </div>
      <div className={styles.content}>
        {/* <div className={styles.spacer}></div> */}
        {/* <div className={styles.main}> */}
        <Suspense fallback={<PageLoader />}>
          <Outlet />
        </Suspense>
        {/* </div> */}
      </div>
      {/* <div className={styles.rightbar}>{rightbar}</div> */}
      <div className={styles.footer}>
        <Footer />
      </div>
    </div>
  );
});
