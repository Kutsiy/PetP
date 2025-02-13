import { NgModule } from '@angular/core';
import { HeaderWidgetComponent } from './header.component';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { AuthStoreModule } from '../../shared/store';

@NgModule({
  declarations: [HeaderWidgetComponent],
  imports: [RouterModule, MatIconModule, AuthStoreModule],
  exports: [HeaderWidgetComponent],
})
export class HeaderWidgetModule {}
