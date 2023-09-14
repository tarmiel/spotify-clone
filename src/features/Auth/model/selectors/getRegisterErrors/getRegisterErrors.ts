import { StateSchema } from '@/app/providers/StoreProvider';

export const getRegisterErrors = (state: StateSchema) => state?.auth?.errors?.registerErrors;
