import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PopularArticlesWidgetComponent } from './popular-articles.component';
import { ArticleCardUiModule } from '../../shared/ui';
import { PostsFeatModule } from '../../features';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [PopularArticlesWidgetComponent],
  imports: [RouterModule, ArticleCardUiModule, PostsFeatModule, CommonModule],
  exports: [PopularArticlesWidgetComponent],
})
export class PopularArticlesWidgetModule {}
