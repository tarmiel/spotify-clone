import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';

import { APP_ROUTES } from '@/shared/const/router';
import { SecondaryButton } from '@/shared/ui/Button/SecondaryButton/SecondaryButton';
import { Icon } from '@/shared/ui/Icon';
import { H1, P } from '@/shared/ui/Typography';

import styles from './NotFoundPage.module.scss';
const NotFoundPage: FC = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.NotFoundPage}>
      <Icon type={'filled'} name={'LogoPrimary'} width={60} height={60} />
      <div>
        <H1 size={'lg'}>Page not found</H1>
        <P color={'subdued'}>We can’t seem to find the page you are looking for.</P>
      </div>
      <SecondaryButton onClick={() => navigate(APP_ROUTES.home)}>Home</SecondaryButton>
    </div>
  );
};

export default NotFoundPage;
