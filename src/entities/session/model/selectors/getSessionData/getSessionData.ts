import { StateSchema } from '@/app/providers/StoreProvider';

export const getSessionData = (state: StateSchema) => state.session;
