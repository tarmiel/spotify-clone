import { FC } from 'react';
import { DevTool } from '@hookform/devtools';

import { api } from '@/shared/api/api';
import { cn } from '@/shared/lib/classNames';
import { ClearButton, PrimaryButton } from '@/shared/ui/Button';
import { EmailField, Form, PasswordField } from '@/shared/ui/Form';

import { LoginFormSchema, LoginFormValues } from '../../model/types/loginForm';

import styles from './LoginForm.module.scss';

interface ILoginFormProps {
  className?: string;
  onSuccess?: () => void;
}

export const LoginForm: FC<ILoginFormProps> = ({ onSuccess, className }) => {
  // const onSubmit = async (data: LoginFormValues) => {
  //   try {
  //     const response = await api.post(`${__API__}/api/auth/login`, data);

  //     console.log(response);
  //     const token = response.data.token;
  //     if (token) {
  //       localStorage.setItem('token', JSON.stringify(token));
  //     }
  //   } catch (e) {
  //     console.log(e);
  //   }
  // };

  return (
    <div className={cn(styles.LoginForm, className)}>
      <Form<LoginFormValues, typeof LoginFormSchema>
        onSubmit={(data) => console.log(data)}
        schema={LoginFormSchema}
        options={{ mode: 'onBlur' }}
        className={styles.Fields}
      >
        {({ register, formState, control }) => (
          <>
            <EmailField label={'Email'} error={formState.errors.email} registration={register('email')} />
            <PasswordField label={'Password'} error={formState.errors.password} registration={register('password')} />
            <PrimaryButton
              disabled={formState.isSubmitting || !formState.isValid}
              className={styles.loginBtn}
              type={'submit'}
            >
              Login
            </PrimaryButton>
            <DevTool control={control} />
          </>
        )}
      </Form>
    </div>
  );
};
