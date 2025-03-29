import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PostsWidgetComponent } from './posts.component';
import { FormsModule } from '@angular/forms';
import { PostWidgetModule } from '../post/post.module';
import { PostsFeatModule, PostsService } from '../../features';
import { GsapService } from '../../shared/animations/gsap.service';
import { PostsStoreModule } from '../../shared/store';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [PostsWidgetComponent],
  providers: [GsapService],
  imports: [
    RouterModule,
    FormsModule,
    PostWidgetModule,
    PostsStoreModule,
    CommonModule,
    PostsFeatModule,
  ],
  exports: [PostsWidgetComponent],
})
export class PostsWidgetModule {}
