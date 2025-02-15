import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountPageComponent } from './account.component';
import { AppRoutingModule } from '../app-routing.module';
import { RouterModule, Routes } from '@angular/router';
import { ProfileWidgetComponent } from '../../widgets/profile/profile.component';

const routes: Routes = [
  {
    path: '',
    component: AccountPageComponent,
    children: [
      {
        path: 'profile',
        component: ProfileWidgetComponent,
      },
      {
        path: '**',
        redirectTo: '/account/profile',
      },
    ],
  },
];
@NgModule({
  declarations: [AccountPageComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [AccountPageComponent],
})
export class AccountPageModule {}
