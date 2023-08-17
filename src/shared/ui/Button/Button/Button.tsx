import { ButtonHTMLAttributes, forwardRef, ReactNode } from 'react';

import { cn } from '@/shared/lib/classNames';

import styles from './Button.module.scss';

export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
  className?: string;
  disabled?: boolean;
  full?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, IButtonProps>((props, ref) => {
  const { className, children, disabled, full, type, ...otherProps } = props;

  const cls = [styles.Button, { [styles.full]: full, [styles.disabled]: disabled }, className];

  return (
    <button type={type} className={cn(cls)} disabled={disabled} {...otherProps} ref={ref}>
      {children}
    </button>
  );
});
