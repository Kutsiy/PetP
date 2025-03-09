import { NgModule } from '@angular/core';
import { FooterWidgetComponent } from './footer.component';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [FooterWidgetComponent],
  imports: [RouterModule, MatIconModule],
  exports: [FooterWidgetComponent],
})
export class FooterWidgetModule {}
