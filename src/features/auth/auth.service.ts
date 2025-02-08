import { isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { SIGN_UP } from './schema/sign-up.schema';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private readonly apollo: Apollo,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  login() {
    if (isPlatformBrowser(this.platformId)) {
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
        })
        .valueChanges.pipe(map((data) => data.data.SignUp));
    }
    return null;
  }

  logOut() {
    if (isPlatformBrowser(this.platformId)) {
    }
    return null;
  }
}
