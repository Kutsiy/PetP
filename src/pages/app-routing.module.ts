import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard, NotAuthGuard } from '../shared/guards';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('../pages/home/home.module').then((m) => m.HomePageModule),
    title: 'Home',
    data: { animation: 'HomePage' },
  },
  {
    path: 'articles',
    loadChildren: () =>
      import('../pages/articles/articles.module').then(
        (m) => m.ArticlesPageModule
      ),
    title: 'Articles',
    data: { animation: 'ArticlesPage' },
    canActivate: [NotAuthGuard],
  },
  {
    path: 'article/:id',
    loadChildren: () =>
      import('../pages/post/post.module').then((m) => m.PostPageModule),
    title: 'Post',
    data: { animation: 'SomePostPage' },
    canActivate: [NotAuthGuard],
  },
  {
    path: 'account',
    loadChildren: () =>
      import('../pages/account/account.module').then(
        (m) => m.AccountPageModule
      ),
    title: 'Account',
    data: { animation: 'AccountPage' },
    canActivate: [NotAuthGuard],
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('../pages/auth/auth.module').then((m) => m.AuthPageModule),
    title: 'Authentication',
    data: { animation: 'AuthenticationPage' },
  },
  {
    path: 'not-auth',
    loadChildren: () =>
      import('../pages/not-auth').then((m) => m.NotAuthPageModule),
    title: 'NotAuth',
    data: { animation: 'NotAuth' },
    canActivate: [AuthGuard],
  },
  {
    path: '**',
    loadChildren: () =>
      import('../pages/not-found').then((m) => m.NotFoundPageModule),
    title: 'NotFound',
    data: { animation: 'PageNotFound' },
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'top',
      scrollOffset: [0, 64],
      anchorScrolling: 'enabled',
    }),
  ],
  providers: [NotAuthGuard, AuthGuard],
  exports: [RouterModule],
})
export class AppRoutingModule {}
