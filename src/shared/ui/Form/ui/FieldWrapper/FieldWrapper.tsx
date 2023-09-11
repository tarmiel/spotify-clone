import React, { FC } from 'react';
import { FieldError } from 'react-hook-form';

import { cn } from '@/shared/lib/classNames';
import { Icon } from '@/shared/ui/Icon';
import { Span } from '@/shared/ui/Typography';

import styles from './FieldWrapper.module.scss';

interface IFieldWrapperProps {
  className?: string;
  label?: React.ReactNode;
  children: React.ReactNode;
  error?: FieldError;
  description?: React.ReactNode;
}

export type FieldWrapperPassThroughProps = Omit<IFieldWrapperProps, 'className' | 'children'>;

export const FieldWrapper: FC<IFieldWrapperProps> = ({ label, error, description, children, className }) => {
  let showUnder;

  if (description) {
    showUnder = (
      <div role="note" className={styles.description}>
        <Span>{description}</Span>
      </div>
    );
  }
  if (error?.message) {
    showUnder = (
      <div role="alert" aria-label={error.message} className={styles.error}>
        <Icon type={'filled'} name={'Error'} />
        <Span color={'negative'} size={'sm'}>
          {error.message}
        </Span>
      </div>
    );
  }

  return (
    <div className={cn(className)}>
      <label className={styles.label}>{label}</label>
      <div className={styles.inputField}>{children}</div>
      {showUnder}
    </div>
  );
};
