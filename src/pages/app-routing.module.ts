import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
  AccountPageComponent,
  ArticlesPageComponent,
  AuthPageComponent,
  HomewrapperComponent,
  NotFoundPageComponent,
  PostPageComponent,
} from './';
import { ProfileWidgetComponent } from '../widgets/profile/profile.component';

const routes: Routes = [
  {
    path: '',
    component: HomewrapperComponent,
    title: 'HomePage',
    data: { animation: 'HomePage' },
  },
  {
    path: 'articles',
    component: ArticlesPageComponent,
    title: 'ArticlesPage',
    data: { animation: 'ArticlesPage' },
  },
  {
    path: 'article/:id',
    component: PostPageComponent,
    data: { animation: 'SomePostPage' },
  },
  {
    path: 'account',
    component: AccountPageComponent,
    title: 'AccountPage',
    data: { animation: 'AccountPage' },
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
  {
    path: 'auth',
    component: AuthPageComponent,
    title: 'AuthenticationPage',
    data: { animation: 'AuthenticationPage' },
  },
  {
    path: '**',
    component: NotFoundPageComponent,
    title: 'PageNotFound',
    data: { animation: 'PageNotFound' },
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'top',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
