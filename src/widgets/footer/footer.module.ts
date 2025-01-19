import { NgModule } from '@angular/core';
import { FooterWidgetComponent } from './footer.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [FooterWidgetComponent],
  imports: [RouterModule],
  exports: [FooterWidgetComponent],
})
export class FooterWidgetModule {}
