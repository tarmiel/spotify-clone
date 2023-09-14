import { FC } from 'react';
import { useSelector } from 'react-redux';
import { DevTool } from '@hookform/devtools';

import { cn } from '@/shared/lib/classNames';
import { PrimaryButton } from '@/shared/ui/Button';
import { EmailField, Form, PasswordField, TextField } from '@/shared/ui/Form';

import { getRegisterErrors } from '../../model/selectors/getRegisterErrors/getRegisterErrors';
import { useAuthHandlers } from '../../model/services/authHandlers/auth';
import { RegisterFormSchema, RegisterFormValues } from '../../model/types/registerForm';

import styles from './RegisterForm.module.scss';

interface IRegisterFormProps {
  className?: string;
  onSuccess?: () => void;
}

export const RegisterForm: FC<IRegisterFormProps> = ({ onSuccess, className }) => {
  const { register: registerHandler } = useAuthHandlers(onSuccess);
  const errors = useSelector(getRegisterErrors);

  return (
    <div className={cn(styles.RegisterForm, className)}>
      <Form<RegisterFormValues, typeof RegisterFormSchema>
        schema={RegisterFormSchema}
        onSubmit={registerHandler}
        options={{ mode: 'onBlur' }}
        errors={errors}
        className={styles.Fields}
      >
        {({ register, formState, control }) => (
          <>
            <EmailField label={'Email'} error={formState.errors.email} registration={register('email')} />
            <PasswordField label={'Password'} error={formState.errors.password} registration={register('password')} />
            <PasswordField
              label={'Confirm password'}
              error={formState.errors.confirmPassword}
              registration={register('confirmPassword')}
            />
            <TextField
              label={'Username'}
              description={'It will appear in your profile'}
              error={formState.errors.username}
              registration={register('username')}
            />
            <PrimaryButton
              disabled={formState.isSubmitting || !formState.isValid}
              className={styles.registerBtn}
              type={'submit'}
            >
              Sign up
            </PrimaryButton>
            <DevTool control={control} />
          </>
        )}
      </Form>
    </div>
  );
};
