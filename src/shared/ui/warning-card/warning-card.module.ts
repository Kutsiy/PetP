import { NgModule } from '@angular/core';
import { WarningCardUiComponent } from './warning-card.component';
import { BaseButtonUiModule } from '../buttons';

@NgModule({
  declarations: [WarningCardUiComponent],
  imports: [BaseButtonUiModule],
  exports: [WarningCardUiComponent],
})
export class WarningCardUiModule {}
