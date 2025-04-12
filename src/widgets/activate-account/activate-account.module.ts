import { NgModule } from '@angular/core';
import { ActivateAccountWidgetComponent } from './activate-account.component';
import { MatIconModule } from '@angular/material/icon';
import { BaseButtonUiModule } from '../../shared';
import { AuthFeatModule } from '../../features/auth/auth.module';

@NgModule({
  declarations: [ActivateAccountWidgetComponent],
  imports: [MatIconModule, BaseButtonUiModule, AuthFeatModule],
  exports: [ActivateAccountWidgetComponent],
})
export class ActivateAccountWidgetModule {}
