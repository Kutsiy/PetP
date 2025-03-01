import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseButtonUiComponent } from './base-button.component';

@NgModule({
  declarations: [BaseButtonUiComponent],
  imports: [CommonModule],
  exports: [BaseButtonUiComponent],
})
export class BaseButtonUiModule {}
