import { createReducer, on } from '@ngrx/store';
import * as AuthAction from './auth.actions';

export interface FormsErrors {
  signUp: { message: string | null };
  login: { message: string | null };
}

export interface User {
  id: string | null;
  email: string | null;
  isActivated: boolean;
}
export interface AuthStateType {
  isAuthenticated: boolean;
  isActivated: boolean;
  user: User;
  errors: FormsErrors;
}

export const authState: AuthStateType = {
  isAuthenticated: false,
  isActivated: false,
  user: {
    id: null,
    email: null,
    isActivated: false,
  },
  errors: {
    signUp: {
      message: null,
    },
    login: {
      message: null,
    },
  },
};

export const authReducer = createReducer(
  authState,
  on(AuthAction.authSetActivated, (state) => ({ ...state, isActivated: true })),
  on(AuthAction.authSetAuthenticated, (state) => ({
    ...state,
    isAuthenticated: true,
  })),
  on(AuthAction.authSetUser, (state, { user }) => ({
    ...state,
    user: user,
  })),
  on(AuthAction.authSetLoginError, (state, { message }) => ({
    ...state,
    errors: {
      ...state.errors,
      login: { message },
    },
  })),
  on(AuthAction.authSetSignUpError, (state, { message }) => ({
    ...state,
    errors: {
      ...state.errors,
      signUp: { message },
    },
  }))
);
