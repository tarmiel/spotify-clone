import React, { ButtonHTMLAttributes, FC, forwardRef, KeyboardEvent, MouseEvent, ReactNode } from 'react';

import { cn } from '@/shared/lib/classNames';

import styles from './BaseButton.module.scss';

export interface IBaseButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
  className?: string;
  type?: 'submit' | 'reset' | 'button';
  disabled?: boolean;
  onClick?: (event: MouseEvent<HTMLButtonElement> | KeyboardEvent<HTMLButtonElement>) => void;
  full?: boolean;
  /**
   * The aria-label value.
   */
  label?: string;
  /**
   * Any HTML attributes to be forwarded to the HTML element.
   */
  buttonAttributes?: Record<string, unknown>;
}

export const BaseButton = forwardRef<HTMLButtonElement, IBaseButtonProps>(
  ({ className, children, label, full, disabled, ...props }, ref) => {
    const cls = {
      [styles.full]: full,
    };

    return (
      <button
        className={cn(styles.BaseButton, cls, className)}
        aria-label={label}
        disabled={disabled}
        aria-disabled={disabled}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    );
  },
);
