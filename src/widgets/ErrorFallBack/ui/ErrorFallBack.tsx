import React, { FC } from 'react';

import { OutlinedButton } from '@/shared/ui/Button/OutlinedButton/OutlinedButton';
import { H2 } from '@/shared/ui/Typography';

import styles from './ErrorFallBack.module.scss';

export const ErrorFallBack = () => {
  return (
    <div className={styles.ErrorFallBack} role="alert">
      <H2 size={'lg'}>Ooops, something went wrong :( </H2>
      <OutlinedButton size={'md'} className={styles.Btn} onClick={() => window.location.assign(window.location.origin)}>
        Refresh
      </OutlinedButton>
    </div>
  );
};
