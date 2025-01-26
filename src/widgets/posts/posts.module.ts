import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PostsWidgetComponent } from './posts.component';
import { FormsModule } from '@angular/forms';
import { PostWidgetModule } from '../post/post.module';

@NgModule({
  declarations: [PostsWidgetComponent],
  imports: [RouterModule, FormsModule, PostWidgetModule],
  exports: [PostsWidgetComponent],
})
export class PostsWidgetModule {}
