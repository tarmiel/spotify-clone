import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';

import { cn } from '@/shared/lib/classNames';
import { IconButton } from '@/shared/ui/Button';
import { HStack } from '@/shared/ui/Stack';

interface IControlsProps {
  className?: string;
}

export const Controls: FC<IControlsProps> = ({ className }) => {
  const navigate = useNavigate();
  const goBack = () => navigate(-1);
  const goForward = () => navigate(1);

  return (
    <HStack className={className} gap={'8'}>
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
  );
};
