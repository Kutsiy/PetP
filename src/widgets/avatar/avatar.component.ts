import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ImageCroppedEvent } from 'ngx-image-cropper';
import * as AuthSelectors from './../../shared/store/auth/auth.selectors';
import * as AuthActions from './../../shared/store/auth/auth.actions';

@Component({
  selector: 'app-avatar',
  standalone: false,

  templateUrl: './avatar.component.html',
  styleUrl: './avatar.component.scss',
})
export class AvatarWidgetComponent implements OnInit {
  constructor(private readonly store: Store) {}

  ngOnInit(): void {
    this.store.select(AuthSelectors.selectAuthAvatar).subscribe((data) => {
      if (data) {
        this.imageSrc = data;
      }
    });
  }

  imageSrc: string = '';
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
    this.store.dispatch(AuthActions.authSetAvatar({ avatar: this.imageSrc }));
    this.openCropper = false;
    this.imageChangedEvent.target.value = null;
  };

  close = () => {
    this.openCropper = false;
    this.imageChangedEvent.target.value = null;
  };
}
