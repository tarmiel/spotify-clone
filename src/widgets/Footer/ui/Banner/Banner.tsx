import React, { FC } from 'react';

import { APP_ROUTES } from '@/shared/const/router';
import { cn } from '@/shared/lib/classNames';
import AppLink from '@/shared/ui/AppLink/AppLink';
import { SecondaryButton } from '@/shared/ui/Button/SecondaryButton/SecondaryButton';
import { P } from '@/shared/ui/Typography';

import styles from './Banner.module.scss';

interface IBannerProps {
  className?: string;
}

export const Banner: FC<IBannerProps> = ({ className }) => {
  return (
    <div className={cn(styles.Banner, className)}>
      <AppLink to={APP_ROUTES.auth.login}>
        <div className={styles.container}>
          <div className={styles.content}>
            <P size={'sm'}>PREVIEW OF SPOTIFY</P>
            <P>Sign up to get unlimited songs and podcasts with occasional ads. No credit card needed.</P>
          </div>
          <SecondaryButton>Sign up free</SecondaryButton>
        </div>
      </AppLink>
    </div>
  );
};
