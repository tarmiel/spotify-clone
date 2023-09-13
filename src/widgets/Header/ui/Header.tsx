import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

import { APP_ROUTES } from '@/shared/const/router';
import { cn } from '@/shared/lib/classNames';
import { IconButton } from '@/shared/ui/Button/IconButton/IconButton';
import { HStack } from '@/shared/ui/Stack';

import styles from './Header.module.scss';
interface IHeaderProps {
  className?: string;
}

const Header: FC<IHeaderProps> = ({ className }) => {
  const navigate = useNavigate();

  const goBack = () => navigate(-1);
  const goForward = () => navigate(1);
  const goProfile = () => navigate(APP_ROUTES.user('1'));

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
          style={{ width: 32, height: 32, backgroundColor: '#282828', borderRadius: '50%' }}
          onClick={goProfile}
        ></div>
      </HStack>
    </header>
  );
};

export default Header;
