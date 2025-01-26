import { NgModule } from '@angular/core';
import { ArticlesPageComponent } from './articles.component';
import { FormsModule } from '@angular/forms';
import { PostsWidgetModule, SideMenuWidgetModule } from '../../widgets';
import { CommonModule } from '@angular/common';
import { MatIcon } from '@angular/material/icon';
import { PostsService } from '../../features';

@NgModule({
  declarations: [ArticlesPageComponent],
  providers: [PostsService],
  imports: [
    FormsModule,
    SideMenuWidgetModule,
    PostsWidgetModule,
    CommonModule,
    MatIcon,
  ],
  exports: [ArticlesPageComponent],
})
export class ArticlesPageModule {}
