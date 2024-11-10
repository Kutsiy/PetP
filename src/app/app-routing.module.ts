import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FooterComponent } from './Components/FooterComponent/footer.component';
import { MainComponent } from './Components/MainComponents/wrappers/homewrapper/main/main.component';
import { HomewrapperComponent } from './Components/MainComponents/wrappers/homewrapper/homewrapper.component';
import { ArticleswrapperComponent } from './Components/MainComponents/wrappers/articleswrapper/articleswrapper.component';
import { PostPageComponent } from './Components/MainComponents/wrappers/articleswrapper/post-page/post-page.component';
import { AccountwrapperComponent } from './Components/MainComponents/wrappers/accountwrapper/accountwrapper.component';

const routes: Routes = [
  {
    path: '',
    component: HomewrapperComponent,
  },
  { path: 'articles', component: ArticleswrapperComponent },
  { path: 'article/:id', component: PostPageComponent },
  { path: 'account', component: AccountwrapperComponent },
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
