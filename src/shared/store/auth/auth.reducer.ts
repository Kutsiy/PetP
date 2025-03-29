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

export interface Settings {
  avatar: string | null | undefined;
}
export interface AuthStateType {
  isAuthenticated: boolean;
  user: User | null;
  settings: Settings;
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
  settings: {
    avatar: '',
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
  on(AuthAction.authGetUser, (state) => ({
    ...state,
    isLoading: true,
  })),
  on(AuthAction.authSetUser, (state, { user, settings }) => ({
    ...state,
    user: user,
    isLoading: false,
    settings: {
      ...settings,
      avatar: settings?.avatar,
    },
  })),
  on(
    AuthAction.authSetUserAndAuthenticated,
    (state, { user, value, settings }) => ({
      ...state,
      user: user,
      isAuthenticated: value,
      isLoading: false,
      settings: {
        ...settings,
        avatar: settings?.avatar,
      },
    })
  ),
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
  })),
  on(AuthAction.authSetAvatar, (state, { avatar }) => ({
    ...state,
    settings: {
      avatar: avatar,
    },
  }))
);
