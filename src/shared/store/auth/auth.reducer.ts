import { createReducer, on } from '@ngrx/store';

export interface AuthStateType {
  isAuthenticated: boolean;
  isActivated: boolean;
}

export const authState: AuthStateType = {
  isAuthenticated: true,
  isActivated: false,
};

export const authReducer = createReducer(authState);
