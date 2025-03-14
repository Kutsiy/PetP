import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseButtonUiModule } from '../../shared/ui';
import { AvatarWidgetComponent } from './avatar.component';
import { MatIconModule } from '@angular/material/icon';
import { AngularCropperjsModule } from 'angular-cropperjs';

@NgModule({
  declarations: [AvatarWidgetComponent],
  imports: [
    CommonModule,
    BaseButtonUiModule,
    MatIconModule,
    AngularCropperjsModule,
  ],
  exports: [AvatarWidgetComponent],
})
export class AvatarWidgetModule {}
