import { FC, InputHTMLAttributes } from 'react';

import { cn } from '@/shared/lib/classNames';

import styles from './Toggle.module.scss';

interface IToggleProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  id?: string;
  name?: string;
}

export const Toggle: FC<IToggleProps> = ({ id, name, className, ...props }) => {
  return (
    <div className={cn(styles.toggle, className)}>
      <input type="checkbox" id={id} name={name} role="switch" {...props} />
    </div>
  );
};
