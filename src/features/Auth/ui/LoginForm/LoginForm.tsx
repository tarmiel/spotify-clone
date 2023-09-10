import React, { FC } from 'react';

import { cn } from '@/shared/lib/classNames';
import { FieldWrapper, Form } from '@/shared/ui/Form';

import { LoginFormSchema, LoginFormValues } from '../../model/types/loginForm';

import styles from './LoginForm.module.scss';

interface ILoginFormProps {
  className?: string;
  onSuccess?: () => void;
}

export const LoginForm: FC<ILoginFormProps> = ({ onSuccess, className }) => {
  return (
    <div className={cn(styles.LoginForm, className)}>
      <Form<LoginFormValues, typeof LoginFormSchema>
        onSubmit={(data) => console.log(data)}
        schema={LoginFormSchema}
        options={{ mode: 'onBlur' }}
      >
        {({ register, formState }) => (
          <>
            <FieldWrapper label={'Email'} error={formState.errors.email}>
              <input type={'email'} {...register('email')} />
            </FieldWrapper>
            <FieldWrapper label={'Password'} error={formState.errors.password}>
              <input type={'password'} {...register('password')} />
            </FieldWrapper>
          </>
        )}
      </Form>
    </div>
  );
};
