import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PopularArticlesWidgetComponent } from './popular-articles.component';
import { ArticleCardUiModule } from '../../shared/ui';

@NgModule({
  declarations: [PopularArticlesWidgetComponent],
  imports: [RouterModule, ArticleCardUiModule],
  exports: [PopularArticlesWidgetComponent],
})
export class PopularArticlesWidgetModule {}
