import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MainWidgetComponent } from './main.component';
import { BaseButtonUiModule, CubeUiModule } from '../../shared/ui';

@NgModule({
  declarations: [MainWidgetComponent],
  imports: [RouterModule, MatIconModule, CubeUiModule, BaseButtonUiModule],
  exports: [MainWidgetComponent],
})
export class MainWidgetModule {}
