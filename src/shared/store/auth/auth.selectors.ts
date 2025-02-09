import { createFeatureSelector } from '@ngrx/store';
import { stateName } from './auth.constant';
import { AuthStateType } from './auth.reducer';

export const selectFeature = createFeatureSelector<AuthStateType>(stateName);
