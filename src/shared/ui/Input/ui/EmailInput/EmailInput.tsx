import React, { FC, forwardRef } from 'react';

import { cn } from '@/shared/lib/classNames';

import { BaseInput, IBaseInputProps } from '../BaseInput/BaseInput';

import styles from './EmailInput.module.scss';

interface IEmailInputProps extends Omit<IBaseInputProps, 'type'> {}

export const EmailInput = forwardRef<HTMLInputElement, IEmailInputProps>(({ className, ...props }, ref) => {
  return (
    <BaseInput
      placeholder={'Email'}
      type={'email'}
      rounded={'sm'}
      className={cn(styles.EmailInput, className)}
      ref={ref}
      {...props}
    />
  );
});
