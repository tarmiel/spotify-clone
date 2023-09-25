import React, { FC, Suspense } from 'react';

import { cn } from '@/shared/lib/classNames';
import { useAuth } from '@/shared/lib/hooks/useAuth/useAuth';
import { lazyImport } from '@/shared/lib/lazyImport/lazyImport';

import { Banner } from '../Banner/Banner';

// import { Player } from '../Player/Player';
import styles from './Footer.module.scss';

const { Player } = lazyImport(() => import('../Player/Player'), 'Player');

interface IFooterProps {
  className?: string;
}

export const Footer: FC<IFooterProps> = ({ className }) => {
  const { isAuthorized } = useAuth();

  return (
    <footer className={cn(styles.Footer, className)}>
      {isAuthorized ? (
        <Suspense>
          <Player />
        </Suspense>
      ) : (
        <Banner />
      )}
    </footer>
  );
};
