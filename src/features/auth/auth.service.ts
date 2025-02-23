import { isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { SIGN_UP, LOGIN, REFRESH, LOGOUT } from './schema';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private readonly apollo: Apollo,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  login(email: string, password: string) {
    if (isPlatformBrowser(this.platformId)) {
      return this.apollo
        .watchQuery<any>({
          query: LOGIN,
          variables: {
            email,
            password,
          },
          context: {
            fetchOptions: {
              credentials: 'include',
              caches: false,
            },
          },
        })
        .valueChanges.pipe(map((data) => data.data.Login));
    }
    return null;
  }

  signUp(name: string, email: string, password: string) {
    if (isPlatformBrowser(this.platformId)) {
      return this.apollo
        .watchQuery<any>({
          query: SIGN_UP,
          variables: {
            name,
            email,
            password,
          },
          context: {
            fetchOptions: {
              credentials: 'include',
            },
          },
        })
        .valueChanges.pipe(map((data) => data.data.SignUp));
    }
    return null;
  }

  logOut() {
    if (isPlatformBrowser(this.platformId)) {
      return this.apollo
        .watchQuery<any>({
          query: LOGOUT,
          context: {
            fetchOptions: {
              credentials: 'include',
            },
          },
        })
        .valueChanges.pipe(map((data) => data.data.LogOut));
    }
    return null;
  }

  refresh() {
    if (isPlatformBrowser(this.platformId)) {
      return this.apollo
        .mutate({ mutation: REFRESH })
        .pipe(map((data: any) => data.data.Refresh));
    }
    return null;
  }
}
