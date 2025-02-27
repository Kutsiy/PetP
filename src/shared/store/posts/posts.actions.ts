import { createAction, props } from '@ngrx/store';

export const postsSetLoading = createAction(
  '[Posts] Set Loading',
  props<{ value: boolean }>()
);
