import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NotificationsWidgetComponent } from './notifications.component';

@NgModule({
  declarations: [NotificationsWidgetComponent],
  imports: [RouterModule],
  exports: [NotificationsWidgetComponent],
})
export class NotificationsWidgetModule {}
