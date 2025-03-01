import { NgModule } from '@angular/core';
import { LogOutWidgetComponent } from './logout.component';
import { CommonModule } from '@angular/common';
import { BaseButtonUiModule } from '../../shared/ui';
import { AuthService } from '../../features';

@NgModule({
  declarations: [LogOutWidgetComponent],
  imports: [CommonModule, BaseButtonUiModule],
  providers: [AuthService],
  exports: [LogOutWidgetComponent],
})
export class LogOutWidgetModule {}
