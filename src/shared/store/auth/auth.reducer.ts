import { createReducer, on } from '@ngrx/store';
import * as AuthAction from './auth.actions';

export interface User {
  id: string;
  email: string;
}
export interface AuthStateType {
  isAuthenticated: boolean;
  isActivated: boolean;
  user: User | null;
}

export const authState: AuthStateType = {
  isAuthenticated: false,
  isActivated: false,
  user: null,
};

export const authReducer = createReducer(
  authState,
  on(AuthAction.authSetActivated, (state) => ({ ...state, isActivated: true })),
  on(AuthAction.authSetAuthenticated, (state) => ({
    ...state,
    isAuthenticated: true,
  }))
);
