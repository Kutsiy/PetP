import { createAction, props } from '@ngrx/store';
import { Settings, User } from './auth.reducer';

export const authSetAuthenticated = createAction(
  '[Auth] Set Authenticated',
  props<{ value: boolean }>()
);
export const authSetLoading = createAction(
  '[Auth] Set Loading',
  props<{ value: boolean }>()
);

export const authSetAvatar = createAction(
  '[Auth] Set Avatar',
  props<{ avatar: string }>()
);

export const authGetUser = createAction('[Auth] Get User');
export const authSetUser = createAction(
  '[Auth] Set User',
  props<{ user: User | null; settings: Settings | null }>()
);

export const authSetUserAndAuthenticated = createAction(
  '[Auth] Set User And Authenticated',
  props<{ user: User | null; value: boolean; settings: Settings | null }>()
);

export const authSetLoginError = createAction(
  '[Auth] Set Login Error',
  props<{ message: string | null }>()
);

export const authSetSignUpError = createAction(
  '[Auth] Set Sign Up Error',
  props<{ message: string | null }>()
);

export const authSetActivateAccountPopUp = createAction(
  '[Auth] Set Activate Account Pop Up',
  props<{ value: boolean }>()
);
