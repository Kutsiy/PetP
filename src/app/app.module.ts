import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GraphQLModule } from './graphql.module';
import { FooterWidgetModule, HeaderWidgetModule } from '../widgets';
import { AppRoutingModule } from '../pages';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    BrowserAnimationsModule,
    GraphQLModule,
    ReactiveFormsModule,
    FooterWidgetModule,
    HeaderWidgetModule,
  ],
  providers: [provideClientHydration(), provideHttpClient(withFetch())],
  bootstrap: [AppComponent],
})
export class AppModule {}
