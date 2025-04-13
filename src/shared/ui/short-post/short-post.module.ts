import { NgModule } from '@angular/core';
import { ShortPostUiComponent } from './short-post.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [ShortPostUiComponent],
  imports: [RouterModule],
  exports: [ShortPostUiComponent],
})
export class ShortPostUiModule {}
