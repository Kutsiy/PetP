import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleCardUiComponent } from './article-card.component';
import { MatIcon } from '@angular/material/icon';

@NgModule({
  declarations: [ArticleCardUiComponent],
  imports: [CommonModule, MatIcon],
  exports: [ArticleCardUiComponent],
})
export class ArticleCardUiModule {}
