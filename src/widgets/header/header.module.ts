import { NgModule } from '@angular/core';
import { HeaderWidgetComponent } from './header.component';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [HeaderWidgetComponent],
  imports: [RouterModule, MatIconModule],
  exports: [HeaderWidgetComponent],
})
export class HeaderWidgetModule {}
