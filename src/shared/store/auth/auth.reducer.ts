import { createReducer, on } from '@ngrx/store';
import * as AuthAction from './auth.actions';

export interface AuthStateType {
  isAuthenticated: boolean;
  isActivated: boolean;
}

export const authState: AuthStateType = {
  isAuthenticated: true,
  isActivated: false,
};

export const authReducer = createReducer(
  authState,
  on(AuthAction.authSetActivated, (state) => ({ ...state, isActivated: true })),
  on(AuthAction.authSetAuthenticated, (state) => ({
    ...state,
    isAuthenticated: true,
  }))
);
