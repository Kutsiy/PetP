import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileWidgetComponent } from '../widgets/profile/profile.component';
import { ArticlesPageComponent } from './articles/articles.component';
import { HomePageComponent } from './home/home.component';
import { PostPageComponent } from './post/post-page.component';
import { AccountPageComponent } from './account/account.component';
import { AuthPageComponent } from './auth/auth.component';
import { NotFoundPageComponent } from './not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
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
