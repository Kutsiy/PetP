import { NgModule } from '@angular/core';
import { ArticlesPageComponent } from './articles.component';
import { FormsModule } from '@angular/forms';
import {
  PostsWidgetModule,
  SearchWidgetModule,
  SideMenuWidgetModule,
} from '../../widgets';
import { CommonModule } from '@angular/common';
import { MatIcon } from '@angular/material/icon';
import { PostsFeatModule, PostsService } from '../../features';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: '', component: ArticlesPageComponent }];

@NgModule({
  declarations: [ArticlesPageComponent],
  imports: [
    FormsModule,
    SideMenuWidgetModule,
    PostsWidgetModule,
    SearchWidgetModule,
    CommonModule,
    MatIcon,
    PostsFeatModule,
    RouterModule.forChild(routes),
  ],
  exports: [ArticlesPageComponent],
})
export class ArticlesPageModule {}
