import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

// eslint-disable-next-line no-restricted-imports
import { useAuthHandlers } from '@/features/Auth/model/services/authHandlers/auth';
import { APP_ROUTES } from '@/shared/const/router';
import { cn } from '@/shared/lib/classNames';
import { useAuth } from '@/shared/lib/hooks/useAuth/useAuth';
import { IconButton } from '@/shared/ui/Button/IconButton/IconButton';
import { HStack } from '@/shared/ui/Stack';

import styles from './Header.module.scss';
interface IHeaderProps {
  className?: string;
}

const Header: FC<IHeaderProps> = ({ className }) => {
  const navigate = useNavigate();
  const { logout } = useAuthHandlers();
  const { isAuthorized } = useAuth();

  const goBack = () => navigate(-1);
  const goForward = () => navigate(1);
  const goAuth = () => navigate(APP_ROUTES.auth.login);

  return (
    <header className={cn(styles.Header, className)}>
      <div className={styles.back}></div>
      <HStack gap={'8'}>
        <IconButton
          icon={{ type: 'outlined', name: 'ChevronLeft' }}
          variant={'bg'}
          size={'sm'}
          rounded={'full'}
          onClick={goBack}
        />
        <IconButton
          icon={{ type: 'outlined', name: 'ChevronRight' }}
          variant={'bg'}
          size={'sm'}
          rounded={'full'}
          onClick={goForward}
        />
      </HStack>
      <div className={styles.search}></div>
      <HStack>
        <div
          style={{ width: 32, height: 32, backgroundColor: isAuthorized ? 'red' : '#282828', borderRadius: '50%' }}
          onClick={isAuthorized ? logout : goAuth}
        ></div>
      </HStack>
    </header>
  );
};

export default Header;
