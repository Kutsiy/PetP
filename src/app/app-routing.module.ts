import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomewrapperComponent } from './Components/MainComponents/wrappers/homewrapper/homewrapper.component';
import { ArticleswrapperComponent } from './Components/MainComponents/wrappers/articleswrapper/articleswrapper.component';
import { PostPageComponent } from './Components/MainComponents/wrappers/articleswrapper/post-page/post-page.component';
import { AccountwrapperComponent } from './Components/MainComponents/wrappers/accountwrapper/accountwrapper.component';
import { AuthComponent } from '../pages/auth/auth.component';
import { ProfileComponent } from './Components/MainComponents/wrappers/accountwrapper/profile/profile.component';
import { NotFoundPageComponent } from '../pages/not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    component: HomewrapperComponent,
    title: 'HomePage',
    data: { animation: 'HomePage' },
  },
  {
    path: 'articles',
    component: ArticleswrapperComponent,
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
    component: AccountwrapperComponent,
    title: 'AccountPage',
    data: { animation: 'AccountPage' },
    children: [
      {
        path: 'profile',
        component: ProfileComponent,
      },
      {
        path: '**',
        redirectTo: '/account/profile',
      },
    ],
  },
  {
    path: 'auth',
    component: AuthComponent,
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
