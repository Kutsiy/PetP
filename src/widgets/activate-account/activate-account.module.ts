import { NgModule } from '@angular/core';
import { ActivateAccountWidgetComponent } from './activate-account.component';
import { MatIconModule } from '@angular/material/icon';
import { BaseButtonUiModule } from '../../shared';

@NgModule({
  declarations: [ActivateAccountWidgetComponent],
  imports: [MatIconModule, BaseButtonUiModule],
  exports: [ActivateAccountWidgetComponent],
})
export class ActivateAccountWidgetModule {}
