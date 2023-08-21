import React, { FC, memo } from 'react';
import { Outlet } from 'react-router-dom';

import styles from './AuthLayout.module.scss';

export const AuthLayout = memo(() => {
  return (
    <div className={styles.AuthLayout}>
      <div className={styles.container}>
        <Outlet />
      </div>
    </div>
  );
});
