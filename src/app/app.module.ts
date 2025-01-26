import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';

import { AppComponent } from './app.component';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GraphQLModule } from './graphql.module';
import {
  FooterWidgetModule,
  HeaderWidgetModule,
  PostWidgetModule,
} from '../widgets';
import {
  AccountPageModule,
  AppRoutingModule,
  AuthPageModule,
  HomePageModule,
  NotFoundPageModule,
} from '../pages';

@NgModule({
  declarations: [AppComponent],
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
    AccountPageModule,
    ReactiveFormsModule,
    NotFoundPageModule,
    FooterWidgetModule,
    HeaderWidgetModule,
    AuthPageModule,
    PostWidgetModule,
    HomePageModule,
  ],
  providers: [provideClientHydration(), provideHttpClient(withFetch())],
  bootstrap: [AppComponent],
})
export class AppModule {}
