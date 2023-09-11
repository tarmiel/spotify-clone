import React, { FC, forwardRef, useState } from 'react';

import { cn } from '@/shared/lib/classNames';
import { IconButton } from '@/shared/ui/Button/IconButton/IconButton';

import { BaseInput, IBaseInputProps } from '../BaseInput/BaseInput';

import styles from './PasswordInput.module.scss';

interface IPasswordInputProps extends Omit<IBaseInputProps, 'type'> {}

export const PasswordInput = forwardRef<HTMLInputElement, IPasswordInputProps>(({ className, ...props }, ref) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const onTogglePass = () => {
    setIsPasswordVisible((prev) => !prev);
  };

  const type = isPasswordVisible ? 'text' : 'password';

  const iconName = isPasswordVisible ? 'Eye' : 'EyeClose';
  const right = <IconButton icon={{ type: 'outlined', name: iconName }} size={'md'} onClick={onTogglePass} />;

  return (
    <BaseInput
      placeholder={'Password'}
      type={type}
      rounded={'sm'}
      className={cn(styles.PasswordInput, className)}
      addonRight={right}
      ref={ref}
      {...props}
    />
  );
});
