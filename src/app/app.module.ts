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
import { FooterComponent } from './Components/FooterComponent/footer.component';
import { HeaderComponent } from './Components/HeaderComponent/header.component';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { MainComponent } from './Components/MainComponents/wrappers/homewrapper/main/main.component';
import { BulbComponent } from './Components/CanvasComponents/bulb/bulb.component';
import { HomewrapperComponent } from './Components/MainComponents/wrappers/homewrapper/homewrapper.component';
import { ContactsComponent } from './Components/MainComponents/wrappers/homewrapper/contacts/contacts.component';
import { CardComponent } from './Components/UI/card/card.component';
import { StackComponent } from './Components/MainComponents/wrappers/homewrapper/stack/stack.component';
import { ArticleswrapperComponent } from './Components/MainComponents/wrappers/articleswrapper/articleswrapper.component';
import { PostComponent } from './Components/UI/post/post.component';
import { PostsComponent } from './Components/MainComponents/wrappers/articleswrapper/posts/posts.component';
import { SideMenuComponent } from './Components/MainComponents/wrappers/articleswrapper/side-menu/side-menu.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PostPageComponent } from './Components/MainComponents/wrappers/articleswrapper/post-page/post-page.component';
import { GraphQLModule } from './graphql.module';
import { AuthenticationwrapperComponent } from './Components/MainComponents/wrappers/authenticationwrapper/authenticationwrapper.component';
import { NotFoundwrapperComponent } from './Components/MainComponents/wrappers/not-foundwrapper/not-foundwrapper.component';
import { AccountwrapperModule } from './Components/MainComponents/wrappers/accountwrapper/accountwrapper.module';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    MainComponent,
    BulbComponent,
    HomewrapperComponent,
    ContactsComponent,
    CardComponent,
    StackComponent,
    ArticleswrapperComponent,
    PostComponent,
    PostsComponent,
    SideMenuComponent,
    PostPageComponent,
    AuthenticationwrapperComponent,
    NotFoundwrapperComponent,
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
  ],
  providers: [provideClientHydration(), provideHttpClient(withFetch())],
  bootstrap: [AppComponent],
})
export class AppModule {}
