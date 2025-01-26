import { NgModule } from '@angular/core';
import { HomewrapperComponent } from './home.component';
import { CubeUiModule } from '../../shared/ui';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { ContactsWidgetModule, MainWidgetModule } from '../../widgets';

@NgModule({
  declarations: [HomewrapperComponent],
  imports: [
    CubeUiModule,
    RouterModule,
    MatIconModule,
    MainWidgetModule,
    ContactsWidgetModule,
  ],
  exports: [HomewrapperComponent],
})
export class HomePageModule {}
