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
  user: User | null;
  isLoading: boolean;
  errors: FormsErrors;
}

export const authState: AuthStateType = {
  isAuthenticated: false,
  user: {
    id: null,
    email: null,
    isActivated: false,
  },
  isLoading: false,
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
  on(AuthAction.authSetAuthenticated, (state, { value }) => ({
    ...state,
    isAuthenticated: value,
  })),
  on(AuthAction.authSetLoading, (state, { value }) => ({
    ...state,
    isLoading: value ?? false,
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
