import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountPageComponent } from './account.component';
import { RouterModule, Routes } from '@angular/router';
import { ProfileWidgetComponent } from '../../widgets/profile/profile.component';
import { NotificationsWidgetComponent } from '../../widgets/notifications/notifications.component';
import { AccessibilityWidgetComponent } from '../../widgets/accessibility/accessibility.component';
import { WriteArticleWidgetComponent } from '../../widgets/write-article/write-article.component';
import { LogOutWidgetModule, UserArticlesWidgetModule } from '../../widgets';
import { ProfileWidgetModule } from '../../widgets/profile';
import { UserArticlesWidgetComponent } from '../../widgets/user-articles/user-articles.component';
import { AuthActivateGuard } from '../../shared/guards/activate/activate.guard';
import { WarningCardUiModule } from '../../shared';

const routes: Routes = [
  {
    path: '',
    component: AccountPageComponent,
    canActivate: [AuthActivateGuard],
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
        path: 'user-article',
        component: UserArticlesWidgetComponent,
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
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    RouterModule,
    LogOutWidgetModule,
    UserArticlesWidgetModule,
    ProfileWidgetModule,
    WarningCardUiModule,
  ],
  providers: [AuthActivateGuard],
  exports: [AccountPageComponent],
})
export class AccountPageModule {}
