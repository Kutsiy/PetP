import { NgModule } from '@angular/core';
import { UserArticlesWidgetComponent } from './user-articles.component';
import { ShortPostUiModule } from '../../shared';
import { PostsFeatModule } from '../../features';

@NgModule({
  declarations: [UserArticlesWidgetComponent],
  imports: [ShortPostUiModule, PostsFeatModule],
  exports: [UserArticlesWidgetComponent],
})
export class UserArticlesWidgetModule {}
