import { NgModule } from '@angular/core';
import { HomePageComponent } from './home.component';
import { CubeUiModule } from '../../shared/ui';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { ContactsWidgetModule, MainWidgetModule } from '../../widgets';

@NgModule({
  declarations: [HomePageComponent],
  imports: [
    CubeUiModule,
    RouterModule,
    MatIconModule,
    MainWidgetModule,
    ContactsWidgetModule,
  ],
  exports: [HomePageComponent],
})
export class HomePageModule {}
