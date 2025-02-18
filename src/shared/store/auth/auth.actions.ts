import { createAction, props } from '@ngrx/store';
import { FormsErrors, User } from './auth.reducer';

export const authSetAuthenticated = createAction('[Auth] Set Authenticated');
export const authSetActivated = createAction('[Auth] Set Activated');
export const authSetUser = createAction(
  '[Auth] Set User',
  props<{ user: User }>()
);
export const authSetLoginError = createAction(
  '[Auth] Set Login Error',
  props<{ message: string | null }>()
);

export const authSetSignUpError = createAction(
  '[Auth] Set Sign Up Error',
  props<{ message: string | null }>()
);
