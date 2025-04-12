import {
  inject,
  isDevMode,
  NgModule,
  PLATFORM_ID,
  provideAppInitializer,
} from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
  Title,
} from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { RouterModule, TitleStrategy } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GraphQLModule } from './graphql.module';
import {
  ActivateAccountWidgetModule,
  FooterWidgetModule,
  HeaderWidgetModule,
} from '../widgets';
import { AppRoutingModule } from '../pages';
import { provideStore, Store, StoreModule } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { AuthService } from '../features';
import * as AuthActions from './../shared/store/auth/auth.actions';
import { EffectsModule } from '@ngrx/effects';
import { isPlatformBrowser } from '@angular/common';
import { CustomTitleStrategy } from './title.service';
import { AuthServiceStore } from '../shared/services/auth.service';

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
    EffectsModule.forRoot([]),
    ActivateAccountWidgetModule,
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
      const platformId = inject(PLATFORM_ID);
      if (isPlatformBrowser(platformId)) {
        store.dispatch(AuthActions.authGetUser());
      }
    }),
    {
      provide: TitleStrategy,
      useClass: CustomTitleStrategy,
    },
    Title,
    AuthService,
    AuthServiceStore,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
