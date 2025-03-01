import {
  APP_INITIALIZER,
  inject,
  isDevMode,
  NgModule,
  OnInit,
  provideAppInitializer,
} from '@angular/core';
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
    provideAppInitializer(() => {
      const store = inject(Store);
      const authService = inject(AuthService);
      authService.getUser()?.subscribe((data: any) => {
        const user = {
          id: data.id,
          email: data.email,
          isActivated: data.isActivated,
        };
        store.dispatch(AuthActions.authSetAuthenticated({ value: true }));
        if (data) {
          store.dispatch(AuthActions.authSetUser({ user }));
        }
      });
    }),
    AuthService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
