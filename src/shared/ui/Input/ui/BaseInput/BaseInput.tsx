import React, { FC, forwardRef, InputHTMLAttributes, ReactNode } from 'react';

import { cn } from '@/shared/lib/classNames';

import styles from './BaseInput.module.scss';

export interface IBaseInputProps extends InputHTMLAttributes<HTMLInputElement> {
  full?: boolean;
  rounded?: 'none' | 'sm' | 'md' | 'lg';
  addonLeft?: ReactNode;
  addonRight?: ReactNode;
  variant?: 'error';
}

export const BaseInput = forwardRef<HTMLInputElement, IBaseInputProps>(
  ({ type = 'text', full, rounded = 'none', variant, addonLeft, addonRight, className, ...props }, ref) => {
    const wrapperCls = [styles.inputWrapper, className, { [styles.full]: full }];
    const inputCls = [
      styles.BaseInput,
      styles[`rounded-${rounded}`],
      { [styles.right]: !!addonRight, [styles.error]: variant === 'error' },
    ];

    const left = <div className={styles.addonLeft}>{addonLeft}</div>;
    const right = <div className={styles.addonRight}>{addonRight}</div>;

    return (
      <div className={cn(wrapperCls)}>
        {addonLeft && left}
        <input type={type} ref={ref} className={cn(inputCls)} {...props} />
        {addonRight && right}
      </div>
    );
  },
);
