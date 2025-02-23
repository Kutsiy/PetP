import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../shared/guards';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('../pages/home/home.module').then((m) => m.HomePageModule),
    title: 'HomePage',
    data: { animation: 'HomePage' },
  },
  {
    path: 'articles',
    loadChildren: () =>
      import('../pages/articles/articles.module').then(
        (m) => m.ArticlesPageModule
      ),
    title: 'ArticlesPage',
    data: { animation: 'ArticlesPage' },
    canActivate: [AuthGuard],
  },
  {
    path: 'article/:id',
    loadChildren: () =>
      import('../pages/post/post.module').then((m) => m.PostPageModule),
    data: { animation: 'SomePostPage' },
    canActivate: [AuthGuard],
  },
  {
    path: 'account',
    loadChildren: () =>
      import('../pages/account/account.module').then(
        (m) => m.AccountPageModule
      ),
    title: 'AccountPage',
    data: { animation: 'AccountPage' },
    canActivate: [AuthGuard],
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('../pages/auth/auth.module').then((m) => m.AuthPageModule),
    title: 'AuthenticationPage',
    data: { animation: 'AuthenticationPage' },
  },
  {
    path: 'not-auth',
    loadChildren: () =>
      import('../pages/not-auth').then((m) => m.NotAuthPageModule),
    title: 'NotAuth',
    data: { animation: 'NotAuth' },
  },
  {
    path: '**',
    loadChildren: () =>
      import('../pages/not-found').then((m) => m.NotFoundPageModule),
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
  providers: [AuthGuard],
  exports: [RouterModule],
})
export class AppRoutingModule {}
