import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PopularArticlesWidgetComponent } from './popular-articles.component';

@NgModule({
  declarations: [PopularArticlesWidgetComponent],
  imports: [RouterModule],
  exports: [PopularArticlesWidgetComponent],
})
export class PopularArticlesWidgetModule {}
