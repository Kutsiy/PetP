import { NgModule } from '@angular/core';
import { HomePageComponent } from './home.component';
import { CubeUiModule } from '../../shared/ui';
import { RouterModule, Routes } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import {
  ContactsWidgetModule,
  MainWidgetModule,
  PopularArticlesWidgetModule,
} from '../../widgets';
import { AuthServiceStore } from '../../shared/services/auth.service';

const routes: Routes = [{ path: '', component: HomePageComponent }];

@NgModule({
  declarations: [HomePageComponent],
  imports: [
    CubeUiModule,
    RouterModule,
    MatIconModule,
    MainWidgetModule,
    ContactsWidgetModule,
    PopularArticlesWidgetModule,
    RouterModule.forChild(routes),
  ],
  exports: [HomePageComponent],
})
export class HomePageModule {}
