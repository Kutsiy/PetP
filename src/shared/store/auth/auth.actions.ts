import { createAction, props } from '@ngrx/store';
import { User } from './auth.reducer';

export const authSetAuthenticated = createAction('[Auth] Set Authenticated');
export const authSetActivated = createAction('[Auth] Set Activated');
export const authSetUser = createAction(
  '[Auth] Set User',
  props<{ user: User }>()
);
