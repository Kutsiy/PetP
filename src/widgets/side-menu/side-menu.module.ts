import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { CubeUiModule } from '../../shared/ui';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { SideMenuWidgetComponent } from './side-menu.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [SideMenuWidgetComponent],
  imports: [
    RouterModule,
    MatIconModule,
    CubeUiModule,
    FormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    CommonModule,
  ],
  exports: [SideMenuWidgetComponent],
})
export class SideMenuWidgetModule {}
