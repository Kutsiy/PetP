import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { stateName } from './post.constant';
import { postsReducer } from './posts.reducer';

@NgModule({
  declarations: [],
  imports: [StoreModule.forFeature(stateName, postsReducer)],
  exports: [],
})
export class PostsStoreModule {}
