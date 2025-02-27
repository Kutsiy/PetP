import { createReducer, on } from '@ngrx/store';
import * as PostsActions from './posts.actions';
export interface PostsStateType {
  isLoading: boolean;
}

export const postsState: PostsStateType = {
  isLoading: false,
};

export const postsReducer = createReducer(
  postsState,
  on(PostsActions.postsSetLoading, (state, { value }) => ({
    ...state,
    isLoading: value,
  }))
);
