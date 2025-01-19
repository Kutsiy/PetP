import { NgModule } from '@angular/core';
import { NotFoundPageComponent } from './not-found.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [NotFoundPageComponent],
  imports: [RouterModule],
  exports: [NotFoundPageComponent],
})
export class NotFoundPageModule {}
