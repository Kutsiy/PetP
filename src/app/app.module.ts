import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';
import { MatIconModule } from '@angular/material/icon';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './Components/FooterComponent/footer.component';
import { HeaderComponent } from './Components/HeaderComponent/header.component';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { MainComponent } from './Components/MainComponents/main/main.component';
import { BulbComponent } from './Components/CanvasComponents/bulb/bulb.component';
import { HomewrapperComponent } from './Components/MainComponents/wrappers/homewrapper/homewrapper.component';
import { ContactsComponent } from './Components/MainComponents/contacts/contacts.component';
import { CardComponent } from './Components/UI/card/card.component';
import { StackComponent } from './Components/MainComponents/stack/stack.component';
import { ArticleswrapperComponent } from './Components/MainComponents/wrappers/articleswrapper/articleswrapper.component';
import { PostComponent } from './Components/UI/post/post.component';
import { PostsComponent } from './Components/UI/posts/posts.component';
import { SideMenuComponent } from './Components/MainComponents/side-menu/side-menu.component';

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
  ],
  imports: [BrowserModule, AppRoutingModule, MatIconModule, RouterModule],
  providers: [provideClientHydration(), provideHttpClient(withFetch())],
  bootstrap: [AppComponent],
})
export class AppModule {}
