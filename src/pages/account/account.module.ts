import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountPageComponent } from './account.component';
import { RouterModule, Routes } from '@angular/router';
import { ProfileWidgetComponent } from '../../widgets/profile/profile.component';
import { NotificationsWidgetComponent } from '../../widgets/notifications/notifications.component';
import { AccessibilityWidgetComponent } from '../../widgets/accessibility/accessibility.component';
import { WriteArticleWidgetComponent } from '../../widgets/write-article/write-article.component';

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
        path: 'notifications',
        component: NotificationsWidgetComponent,
      },
      {
        path: 'accessability',
        component: AccessibilityWidgetComponent,
      },
      {
        path: 'write-article',
        component: WriteArticleWidgetComponent,
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
  imports: [CommonModule, RouterModule.forChild(routes), RouterModule],
  exports: [AccountPageComponent],
})
export class AccountPageModule {}
