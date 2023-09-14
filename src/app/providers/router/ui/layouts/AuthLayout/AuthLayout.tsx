import React, { FC, memo, Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { authReducer } from '@/features/Auth';
import DynamicModuleLoader, { ReducersList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { PageLoader } from '@/widgets/PageLoader';

import styles from './AuthLayout.module.scss';

const asyncAuthReducers: ReducersList = {
  auth: authReducer,
};

export const AuthLayout = memo(() => {
  return (
    <DynamicModuleLoader removeAfterUnmount reducers={asyncAuthReducers}>
      <div className={styles.AuthLayout}>
        <div className={styles.container}>
          <Suspense fallback={<PageLoader />}>
            <Outlet />
          </Suspense>
        </div>
      </div>
    </DynamicModuleLoader>
  );
});
