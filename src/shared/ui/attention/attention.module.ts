import { NgModule } from '@angular/core';
import { AttentionUiComponent } from './attention.component';
import { MatIcon } from '@angular/material/icon';

@NgModule({
  declarations: [AttentionUiComponent],
  imports: [MatIcon],
  exports: [AttentionUiComponent],
})
export class AttentionUiModule {}
