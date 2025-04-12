import { NgModule } from '@angular/core';
import { HeaderWidgetComponent } from './header.component';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { AuthStoreModule } from '../../shared/store';
import { AuthServiceStore } from '../../shared/services/auth.service';

@NgModule({
  declarations: [HeaderWidgetComponent],
  imports: [RouterModule, MatIconModule, AuthStoreModule],
  providers: [AuthServiceStore],
  exports: [HeaderWidgetComponent],
})
export class HeaderWidgetModule {}
