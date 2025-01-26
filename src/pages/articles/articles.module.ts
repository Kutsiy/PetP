import { NgModule } from '@angular/core';
import { ArticlesPageComponent } from './articles.component';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { PostsWidgetModule, SideMenuWidgetModule } from '../../widgets';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [ArticlesPageComponent],
  imports: [
    MatIconModule,
    RouterModule,
    FormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    SideMenuWidgetModule,
    PostsWidgetModule,
    CommonModule,
  ],
  exports: [ArticlesPageComponent],
})
export class ArticlesPageModule {}
