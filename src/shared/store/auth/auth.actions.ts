import { createAction, props } from '@ngrx/store';
import { User } from './auth.reducer';

export const authSetAuthenticated = createAction(
  '[Auth] Set Authenticated',
  props<{ value: boolean }>()
);
export const authSetUser = createAction(
  '[Auth] Set User',
  props<{ user: User | null }>()
);
export const authSetLoginError = createAction(
  '[Auth] Set Login Error',
  props<{ message: string | null }>()
);

export const authSetSignUpError = createAction(
  '[Auth] Set Sign Up Error',
  props<{ message: string | null }>()
);
