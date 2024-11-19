import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FooterComponent } from './Components/FooterComponent/footer.component';
import { MainComponent } from './Components/MainComponents/wrappers/homewrapper/main/main.component';
import { HomewrapperComponent } from './Components/MainComponents/wrappers/homewrapper/homewrapper.component';
import { ArticleswrapperComponent } from './Components/MainComponents/wrappers/articleswrapper/articleswrapper.component';
import { PostPageComponent } from './Components/MainComponents/wrappers/articleswrapper/post-page/post-page.component';
import { AccountwrapperComponent } from './Components/MainComponents/wrappers/accountwrapper/accountwrapper.component';
import { AuthenticationwrapperComponent } from './Components/MainComponents/wrappers/authenticationwrapper/authenticationwrapper.component';
import { NotFoundwrapperComponent } from './Components/MainComponents/wrappers/not-foundwrapper/not-foundwrapper.component';

const routes: Routes = [
  {
    path: '',
    component: HomewrapperComponent,
    title: 'HomePage',
  },
  {
    path: 'articles',
    component: ArticleswrapperComponent,
    title: 'ArticlesPage',
  },
  {
    path: 'article/:id',
    component: PostPageComponent,
  },
  {
    path: 'account',
    component: AccountwrapperComponent,
    title: 'AccountPage',
    data: { animation: 'AccountPage' },
  },
  {
    path: 'auth',
    component: AuthenticationwrapperComponent,
    title: 'AuthenticationPage',
  },
  {
    path: '**',
    component: NotFoundwrapperComponent,
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
