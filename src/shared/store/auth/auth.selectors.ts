import { createFeatureSelector, createSelector } from '@ngrx/store';
import { stateName } from './auth.constant';
import { AuthStateType } from './auth.reducer';

export const selectAuth = createFeatureSelector<AuthStateType>(stateName);

export const selectAuthActivated = createSelector(
  selectAuth,
  (state: AuthStateType) => state.isActivated
);
