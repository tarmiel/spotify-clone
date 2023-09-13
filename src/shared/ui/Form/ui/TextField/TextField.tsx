import React, { FC } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';

import { TextInput } from '@/shared/ui/Input';

import { FieldWrapper, FieldWrapperPassThroughProps } from '../FieldWrapper/FieldWrapper';

interface ITextFieldProps extends FieldWrapperPassThroughProps {
  className?: string;
  registration: Partial<UseFormRegisterReturn>;
}

export const TextField: FC<ITextFieldProps> = ({ label, description, registration, error, className }) => {
  return (
    <FieldWrapper label={label} description={description} error={error} className={className}>
      <TextInput placeholder={'Username'} variant={error && 'error'} {...registration} full />
    </FieldWrapper>
  );
};
