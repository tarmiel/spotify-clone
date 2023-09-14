import { FC } from 'react';
import { useSelector } from 'react-redux';
import { DevTool } from '@hookform/devtools';

import { cn } from '@/shared/lib/classNames';
import { PrimaryButton } from '@/shared/ui/Button';
import { EmailField, Form, PasswordField } from '@/shared/ui/Form';

import { getLoginErrors } from '../../model/selectors/getLoginErrors/getLoginErrors';
import { useAuthHandlers } from '../../model/services/authHandlers/auth';
import { LoginFormSchema, LoginFormValues } from '../../model/types/loginForm';

import styles from './LoginForm.module.scss';

interface ILoginFormProps {
  className?: string;
  onSuccess?: () => void;
}

export const LoginForm: FC<ILoginFormProps> = ({ onSuccess, className }) => {
  const { login } = useAuthHandlers(onSuccess);
  const errors = useSelector(getLoginErrors);

  return (
    <div className={cn(styles.LoginForm, className)}>
      <Form<LoginFormValues, typeof LoginFormSchema>
        schema={LoginFormSchema}
        onSubmit={login}
        options={{ mode: 'onBlur' }}
        errors={errors}
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
