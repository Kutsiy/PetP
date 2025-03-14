import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { ProfileWidgetComponent } from './profile.component';
import { AvatarWidgetModule } from '../avatar';

@NgModule({
  declarations: [ProfileWidgetComponent],
  imports: [RouterModule, MatIconModule, AvatarWidgetModule],
  exports: [ProfileWidgetComponent],
})
export class ProfileWidgetModule {}
