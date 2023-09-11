import React, { FC } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';

import { PasswordInput } from '@/shared/ui/Input';

import { FieldWrapper, FieldWrapperPassThroughProps } from '../FieldWrapper/FieldWrapper';

interface IPasswordFieldProps extends FieldWrapperPassThroughProps {
  className?: string;
  registration: Partial<UseFormRegisterReturn>;
}

export const PasswordField: FC<IPasswordFieldProps> = ({ label, registration, error, className }) => {
  return (
    <FieldWrapper label={label} error={error} className={className}>
      <PasswordInput variant={error && 'error'} {...registration} full />
    </FieldWrapper>
  );
};
