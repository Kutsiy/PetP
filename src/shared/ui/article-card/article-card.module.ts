import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleCardUiComponent } from './article-card.component';
import { MatIcon } from '@angular/material/icon';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [ArticleCardUiComponent],
  imports: [CommonModule, MatIcon, RouterModule],
  exports: [ArticleCardUiComponent],
})
export class ArticleCardUiModule {}
