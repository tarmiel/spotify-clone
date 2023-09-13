import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';

import { RegisterForm } from '@/features/Auth';
import { APP_ROUTES } from '@/shared/const/router';
import AppLink from '@/shared/ui/AppLink/AppLink';
import { OutlinedButton } from '@/shared/ui/Button/OutlinedButton/OutlinedButton';
import Divider from '@/shared/ui/Divider/Divider';
import { HStack, VStack } from '@/shared/ui/Stack';
import { H1, Span } from '@/shared/ui/Typography';

import styles from './RegisterPage.module.scss';

const RegisterPage: FC = () => {
  const navigate = useNavigate();
  return (
    <VStack className={styles.RegisterPage} gap={'32'} align={'center'} max>
      <HStack gap={'32'}>
        <H1>Sign up for Spotify</H1>
        {/* <Icon type={'filled'} name={'LogoSecondary'} width={48} height={48} /> */}
      </HStack>
      <VStack className={styles.content} gap={'8'} max>
        <OutlinedButton icon={{ type: 'filled', name: 'Google' }} full>
          Sign up with Google
        </OutlinedButton>
        <OutlinedButton icon={{ type: 'filled', name: 'Facebook' }} full>
          Sign up with Facebook
        </OutlinedButton>
        <OutlinedButton icon={{ type: 'filled', name: 'Apple' }} full>
          Sign up with Apple
        </OutlinedButton>
      </VStack>
      <Divider>OR</Divider>
      <RegisterForm onSuccess={() => navigate(APP_ROUTES.home)} className={styles.content} />
      <Divider />
      <HStack gap={'8'}>
        <Span size={'md'}>Already have an account?</Span>
        <AppLink to={APP_ROUTES.auth.login} variant={'base'} underline>
          Login to Spotify
        </AppLink>
      </HStack>
    </VStack>
  );
};

export default RegisterPage;
