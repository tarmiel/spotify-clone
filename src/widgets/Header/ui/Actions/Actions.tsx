import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

import { AvatarDropDown } from '@/features/Header/AvatarDropDown/';
import { APP_ROUTES } from '@/shared/const/router';
import { useAuth } from '@/shared/lib/hooks/useAuth/useAuth';
import { ClearButton } from '@/shared/ui/Button';
import { SecondaryButton } from '@/shared/ui/Button/SecondaryButton/SecondaryButton';
import { HStack } from '@/shared/ui/Stack';

interface IActionsProps {
  className?: string;
}

export const Actions: FC<IActionsProps> = ({ className }) => {
  const { isAuthorized } = useAuth();
  const navigate = useNavigate();

  const unAuthorizedActions = (
    <>
      <ClearButton onClick={() => navigate(APP_ROUTES.auth.register)}>Sign up</ClearButton>
      <SecondaryButton onClick={() => navigate(APP_ROUTES.auth.login)}>Log in</SecondaryButton>
    </>
  );
  const authorizedActions = (
    <>
      <SecondaryButton size={'sm'}>Explore premium</SecondaryButton>
      <AvatarDropDown />
    </>
  );

  return (
    <HStack className={className} gap={'16'}>
      {isAuthorized ? authorizedActions : unAuthorizedActions}
    </HStack>
  );
};
