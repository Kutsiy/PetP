import { isDevMode, NgModule, OnInit } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GraphQLModule } from './graphql.module';
import { FooterWidgetModule, HeaderWidgetModule } from '../widgets';
import { AppRoutingModule } from '../pages';
import { provideStore, Store, StoreModule } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { AuthService } from '../features';
import * as AuthActions from './../shared/store/auth/auth.actions';
import * as AuthSelectors from '../shared/store/auth/auth.selectors';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    BrowserAnimationsModule,
    GraphQLModule,
    FooterWidgetModule,
    HeaderWidgetModule,
    StoreModule.forRoot(
      {},
      {
        runtimeChecks: {
          strictStateImmutability: true,
          strictActionImmutability: true,
          strictStateSerializability: true,
          strictActionSerializability: true,
        },
      }
    ),
  ],
  providers: [
    provideClientHydration(),
    provideHttpClient(withFetch()),
    provideStore(),
    provideStoreDevtools({
      maxAge: 25,
      logOnly: !isDevMode(),
      autoPause: true,
      trace: false,
      traceLimit: 75,
      connectInZone: true,
    }),
    AuthService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(
    private readonly authService: AuthService,
    private readonly store: Store
  ) {
    this.authService.refresh()?.subscribe((data) => {
      this.store.dispatch(AuthActions.authSetAuthenticated());
      if (data.user) {
        this.store.dispatch(AuthActions.authSetUser({ user: data.user }));
      }
    });
  }
}
