import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PostsWidgetComponent } from './posts.component';
import { FormsModule } from '@angular/forms';
import { PostWidgetModule } from '../post/post.module';
import { PostsService } from '../../features';
import { GsapService } from '../../shared/animations/gsap.service';
import { PostsStoreModule } from '../../shared/store';

@NgModule({
  declarations: [PostsWidgetComponent],
  providers: [PostsService, GsapService],
  imports: [RouterModule, FormsModule, PostWidgetModule, PostsStoreModule],
  exports: [PostsWidgetComponent],
})
export class PostsWidgetModule {}
