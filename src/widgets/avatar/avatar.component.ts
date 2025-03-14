import { Component, ViewChild } from '@angular/core';
import { CropperComponent } from 'angular-cropperjs';

@Component({
  selector: 'app-avatar',
  standalone: false,

  templateUrl: './avatar.component.html',
  styleUrl: './avatar.component.scss',
})
export class AvatarWidgetComponent {
  @ViewChild('angularCropper') angularCropper!: CropperComponent;
  imageUrl: string | null = null;
  croppedImage: string | null = null;
  openCropper: boolean = false;

  cropperOptions = {
    aspectRatio: 1,
    viewMode: 1,
    dragMode: 'move',
    background: false,
    autoCropArea: 1,
    movable: true,
    scalable: true,
    zoomable: false,
    cropBoxResizable: false,
    width: 250,
    height: 250,
  };

  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      const file = input.files[0];
      const reader = new FileReader();

      reader.onload = (e) => {
        this.imageUrl = e.target?.result as string;
      };
      reader.readAsDataURL(file);
    }
    this.openCropper = true;
  }

  cropImage() {
    if (this.angularCropper) {
      const croppedCanvas = this.angularCropper.cropper.getCroppedCanvas({
        width: 250,
        height: 250,
      });
      this.croppedImage = croppedCanvas.toDataURL('image/png');
    }
  }

  close() {
    this.openCropper = false;
  }
}
