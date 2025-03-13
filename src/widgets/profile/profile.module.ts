import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { ProfileWidgetComponent } from './profile.component';

@NgModule({
  declarations: [ProfileWidgetComponent],
  imports: [RouterModule, MatIconModule],
  exports: [ProfileWidgetComponent],
})
export class ProfileWidgetModule {}
