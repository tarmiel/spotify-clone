import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

import { LoginForm } from '@/features/Auth';
import { APP_ROUTES } from '@/shared/const/router';
import { cn } from '@/shared/lib/classNames';
import AppLink from '@/shared/ui/AppLink/AppLink';
import { OutlinedButton } from '@/shared/ui/Button/OutlinedButton/OutlinedButton';
import Divider from '@/shared/ui/Divider/Divider';
import { Icon } from '@/shared/ui/Icon';
import { HStack, VStack } from '@/shared/ui/Stack';
import { H1, Span } from '@/shared/ui/Typography';

import styles from './LoginPage.module.scss';

const LoginPage: FC = () => {
  const navigate = useNavigate();
  return (
    <VStack className={styles.LoginPage} gap={'32'} align={'center'} max>
      <HStack gap={'32'}>
        <H1>Login to Spotify</H1>
        {/* <Icon type={'filled'} name={'LogoSecondary'} width={48} height={48} /> */}
      </HStack>
      <VStack className={styles.content} gap={'8'} max>
        <OutlinedButton icon={{ type: 'filled', name: 'Google' }} full>
          Sign in via Google
        </OutlinedButton>
        <OutlinedButton icon={{ type: 'filled', name: 'Facebook' }} full>
          Sign in via Facebook
        </OutlinedButton>
        <OutlinedButton icon={{ type: 'filled', name: 'Apple' }} full>
          Sign in via Apple
        </OutlinedButton>
      </VStack>
      <Divider />

      <LoginForm onSuccess={() => navigate(APP_ROUTES.home)} className={styles.content} />

      <AppLink to={APP_ROUTES.auth.login} variant={'base'} underline>
        Forget password?
      </AppLink>
      <Divider />
      <HStack gap={'8'}>
        <Span size={'md'}>Don`t have an account?{''}</Span>
        <AppLink to={APP_ROUTES.auth.register} variant={'base'} underline>
          Sign up for Spotify
        </AppLink>
      </HStack>
    </VStack>
  );
};

export default LoginPage;
