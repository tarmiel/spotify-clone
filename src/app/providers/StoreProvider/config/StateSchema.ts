import { AxiosInstance } from 'axios';
import { AnyAction, CombinedState, EnhancedStore, Reducer, ReducersMapObject } from '@reduxjs/toolkit';

import { PlayerSchema } from '@/entities/Player';
import { SessionSchema } from '@/entities/Session';
import { AuthSchema } from '@/features/Auth';
import { rtkApi } from '@/shared/api/rtkApi';

export interface StateSchema {
  // sync reducers
  session: SessionSchema;
  [rtkApi.reducerPath]: ReturnType<typeof rtkApi.reducer>;

  // async reducers
  auth?: AuthSchema;
  player?: PlayerSchema;
}

export type StateSchemaKey = keyof StateSchema;

export interface ThunkExtraArg {
  api: AxiosInstance;
}

export interface ThunkConfig<T> {
  rejectValue: T;
  extra: ThunkExtraArg;
  state: StateSchema;
}

export interface ReducerManager {
  getReducerMap: () => ReducersMapObject<StateSchema>;
  reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>;
  add: (key: StateSchemaKey, reducer: Reducer) => void;
  remove: (key: StateSchemaKey) => void;
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
  reducerManager: ReducerManager;
}
