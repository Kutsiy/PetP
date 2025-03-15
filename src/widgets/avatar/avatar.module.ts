import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseButtonUiModule } from '../../shared/ui';
import { AvatarWidgetComponent } from './avatar.component';
import { MatIconModule } from '@angular/material/icon';
import { AngularCropperjsModule } from 'angular-cropperjs';
import { ImageCropperComponent } from 'ngx-image-cropper';

@NgModule({
  declarations: [AvatarWidgetComponent],
  imports: [
    CommonModule,
    BaseButtonUiModule,
    MatIconModule,
    AngularCropperjsModule,
    ImageCropperComponent,
  ],
  exports: [AvatarWidgetComponent],
})
export class AvatarWidgetModule {}
