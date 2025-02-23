import { createFeatureSelector, createSelector } from '@ngrx/store';
import { stateName } from './auth.constant';
import { AuthStateType } from './auth.reducer';

const selectAuth = createFeatureSelector<AuthStateType>(stateName);

export const selectAuthActivated = createSelector(
  selectAuth,
  (state: AuthStateType) => state.user.isActivated
);

export const selectAuthAuthenticated = createSelector(
  selectAuth,
  (state: AuthStateType) => state.isAuthenticated
);

export const selectAuthState = createSelector(
  selectAuthActivated,
  selectAuthAuthenticated,
  (isActive, isAuth) => ({ isActive, isAuth })
);

export const selectLoginError = createSelector(
  selectAuth,
  (state: AuthStateType) => state.errors.login.message
);

export const selectSignUpError = createSelector(
  selectAuth,
  (state: AuthStateType) => state.errors.signUp.message
);
