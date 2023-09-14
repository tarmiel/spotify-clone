import { TExternalFormError } from '@/shared/ui/Form/ui/Form/Form';

import { LoginFormValues } from './loginForm';
import { RegisterFormValues } from './registerForm';

export interface AuthSchema {
  isLoading?: boolean;
  errors: {
    loginErrors?: TExternalFormError<LoginFormValues>[];
    registerErrors?: TExternalFormError<RegisterFormValues>[];
  };
}
