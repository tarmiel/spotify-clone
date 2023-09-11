import React, { FC } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';

import { EmailInput } from '@/shared/ui/Input';

import { FieldWrapper, FieldWrapperPassThroughProps } from '../FieldWrapper/FieldWrapper';

interface IEmailFieldProps extends FieldWrapperPassThroughProps {
  className?: string;
  registration: Partial<UseFormRegisterReturn>;
}

export const EmailField: FC<IEmailFieldProps> = ({ label, registration, error, className }) => {
  return (
    <FieldWrapper label={label} error={error} className={className}>
      <EmailInput variant={error && 'error'} {...registration} full />
    </FieldWrapper>
  );
};
