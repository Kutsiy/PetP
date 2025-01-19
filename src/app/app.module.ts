import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { MainComponent } from './Components/MainComponents/wrappers/homewrapper/main/main.component';
import { HomewrapperComponent } from './Components/MainComponents/wrappers/homewrapper/homewrapper.component';
import { ContactsComponent } from './Components/MainComponents/wrappers/homewrapper/contacts/contacts.component';
import { StackComponent } from './Components/MainComponents/wrappers/homewrapper/stack/stack.component';
import { ArticleswrapperComponent } from './Components/MainComponents/wrappers/articleswrapper/articleswrapper.component';
import { PostsComponent } from './Components/MainComponents/wrappers/articleswrapper/posts/posts.component';
import { SideMenuComponent } from './Components/MainComponents/wrappers/articleswrapper/side-menu/side-menu.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PostPageComponent } from './Components/MainComponents/wrappers/articleswrapper/post-page/post-page.component';
import { GraphQLModule } from './graphql.module';
import { AccountwrapperModule } from './Components/MainComponents/wrappers/accountwrapper/accountwrapper.module';
import { FooterWidgetModule, HeaderWidgetModule } from '../widgets';
import { CardUiModule, CubeUiModule, PostUiModule } from '../shared/ui';
import { AuthPageModule, NotFoundPageModule } from '../pages';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HomewrapperComponent,
    ContactsComponent,
    StackComponent,
    ArticleswrapperComponent,
    PostsComponent,
    SideMenuComponent,
    PostPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    RouterModule,
    FormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    BrowserAnimationsModule,
    GraphQLModule,
    AccountwrapperModule,
    ReactiveFormsModule,
    NotFoundPageModule,
    FooterWidgetModule,
    HeaderWidgetModule,
    CubeUiModule,
    CardUiModule,
    AuthPageModule,
    PostUiModule,
  ],
  providers: [provideClientHydration(), provideHttpClient(withFetch())],
  bootstrap: [AppComponent],
})
export class AppModule {}
