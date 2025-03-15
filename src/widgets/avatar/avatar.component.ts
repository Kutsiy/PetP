import { Component, ElementRef, ViewChild } from '@angular/core';
import { ImageCroppedEvent } from 'ngx-image-cropper';

@Component({
  selector: 'app-avatar',
  standalone: false,

  templateUrl: './avatar.component.html',
  styleUrl: './avatar.component.scss',
})
export class AvatarWidgetComponent {
  imageSrc: string | null = null;
  openCropper = false;
  imageChangedEvent: any = null;
  croppedImage: any = '';

  onFileSelected(event: any): void {
    this.imageChangedEvent = event;
    this.openCropper = true;
  }

  imageCropped(event: ImageCroppedEvent) {
    this.croppedImage = event.objectUrl;
  }

  cropImage = () => {
    this.imageSrc = this.croppedImage;
    this.openCropper = false;
    this.imageChangedEvent.target.value = null;
  };

  close = () => {
    this.openCropper = false;
    this.imageChangedEvent.target.value = null;
  };
}
