import React, { FC } from 'react';
import { FieldError } from 'react-hook-form';

import { cn } from '@/shared/lib/classNames';

interface IFieldWrapperProps {
  className?: string;
  label?: React.ReactNode;
  children: React.ReactNode;
  error?: FieldError;
  description?: React.ReactNode;
}

export const FieldWrapper: FC<IFieldWrapperProps> = ({ label, error, description, children, className }) => {
  let showUnder;

  if (description) {
    showUnder = (
      <div role="note" className={''}>
        {description}
      </div>
    );
  }
  if (error?.message) {
    showUnder = (
      <div role="alert" aria-label={error.message} className={''}>
        {error.message}
      </div>
    );
  }

  return (
    <div className={cn(className)}>
      <label className={''}>
        {label}
        <div className={''}>{children}</div>
      </label>
      {showUnder}
    </div>
  );
};
