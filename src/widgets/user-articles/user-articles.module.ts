import { NgModule } from '@angular/core';
import { UserArticlesWidgetComponent } from './user-articles.component';
import { ShortPostUiModule } from '../../shared';

@NgModule({
  declarations: [UserArticlesWidgetComponent],
  imports: [ShortPostUiModule],
  exports: [UserArticlesWidgetComponent],
})
export class UserArticlesWidgetModule {}
