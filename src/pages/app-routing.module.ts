import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard, NotAuthGuard } from '../shared/guards';
import { AuthActivateGuard } from '../shared/guards/activate/activate.guard';

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
    canActivate: [NotAuthGuard, AuthActivateGuard],
  },
  {
    path: 'article/:id',
    loadChildren: () =>
      import('../pages/post/post.module').then((m) => m.PostPageModule),
    title: 'Post',
    data: { animation: 'SomePostPage' },
    canActivate: [NotAuthGuard, AuthActivateGuard],
  },
  {
    path: 'account',
    loadChildren: () =>
      import('../pages/account/account.module').then(
        (m) => m.AccountPageModule
      ),
    title: 'Account',
    data: { animation: 'AccountPage' },
    canActivate: [NotAuthGuard, AuthActivateGuard],
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
      onSameUrlNavigation: 'reload',
    }),
  ],
  providers: [NotAuthGuard, AuthGuard, AuthActivateGuard],
  exports: [RouterModule],
})
export class AppRoutingModule {}
