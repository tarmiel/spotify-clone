import React, { FC, forwardRef } from 'react';

import { cn } from '@/shared/lib/classNames';

import { BaseInput, IBaseInputProps } from '../BaseInput/BaseInput';

import styles from './TextInput.module.scss';

interface ITextInputProps extends Omit<IBaseInputProps, 'type'> {}

export const TextInput = forwardRef<HTMLInputElement, ITextInputProps>(({ className, ...props }, ref) => {
  return <BaseInput type={'text'} rounded={'sm'} className={cn(styles.TextInput, className)} ref={ref} {...props} />;
});
