import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MainWidgetComponent } from './main.component';
import { CubeUiModule } from '../../shared/ui';

@NgModule({
  declarations: [MainWidgetComponent],
  imports: [RouterModule, MatIconModule, CubeUiModule],
  exports: [MainWidgetComponent],
})
export class MainWidgetModule {}
