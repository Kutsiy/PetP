import { createFeatureSelector, createSelector } from '@ngrx/store';
import { PostsStateType } from './posts.reducer';
import { stateName } from './post.constant';

const selectPosts = createFeatureSelector<PostsStateType>(stateName);

export const selectIsLoading = createSelector(
  selectPosts,
  (state: PostsStateType) => state.isLoading
);
