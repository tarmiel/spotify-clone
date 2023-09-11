import React, { FC, memo, Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { PageLoader } from '@/widgets/PageLoader';

import styles from './AuthLayout.module.scss';

export const AuthLayout = memo(() => {
  return (
    <div className={styles.AuthLayout}>
      <div className={styles.container}>
        <Suspense fallback={<PageLoader />}>
          <Outlet />
        </Suspense>
      </div>
    </div>
  );
});
