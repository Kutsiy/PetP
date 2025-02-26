import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AccessibilityWidgetComponent } from './accessibility.component';

@NgModule({
  declarations: [AccessibilityWidgetComponent],
  imports: [RouterModule],
  exports: [AccessibilityWidgetComponent],
})
export class AccessibilityWidgetModule {}
