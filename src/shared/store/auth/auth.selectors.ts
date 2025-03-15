import { createFeatureSelector, createSelector } from '@ngrx/store';
import { stateName } from './auth.constant';
import { AuthStateType } from './auth.reducer';

const selectAuth = createFeatureSelector<AuthStateType>(stateName);

export const selectAuthActivated = createSelector(
  selectAuth,
  (state: AuthStateType) => (state.user ? state.user.isActivated : false)
);

export const selectAuthAuthenticated = createSelector(
  selectAuth,
  (state: AuthStateType) => state.isAuthenticated
);

export const selectAuthAvatar = createSelector(
  selectAuth,
  (state: AuthStateType) => state.settings.avatar
);

export const selectAuthLoading = createSelector(
  selectAuth,
  (state: AuthStateType) => state.isLoading
);

export const selectAuthState = createSelector(
  selectAuthActivated,
  selectAuthAuthenticated,
  selectAuthLoading,
  (isActive, isAuth, isLoading) => ({ isActive, isAuth, isLoading })
);

export const selectUser = createSelector(
  selectAuth,
  (state: AuthStateType) => state.user
);

export const selectLoginError = createSelector(
  selectAuth,
  (state: AuthStateType) => state.errors.login.message
);

export const selectSignUpError = createSelector(
  selectAuth,
  (state: AuthStateType) => state.errors.signUp.message
);
