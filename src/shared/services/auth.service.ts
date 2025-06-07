import { Injectable, signal } from '@angular/core';
import { toObservable } from '@angular/core/rxjs-interop';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import * as AuthSelectors from './../store/auth/auth.selectors';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthServiceStore {
  constructor(private readonly router: Router, private readonly store: Store) {}

  showActivatePopUp = signal(false);
  userAuth = signal(false);
  userActivate = signal(false);
  isAuthorized = signal(false);

  setActivate(value: boolean) {
    this.userActivate.set(value);
  }

  getActivate() {
    return this.userActivate;
  }

  getActivateAsObservable() {
    return toObservable(this.userActivate);
  }

  setAuth(value: boolean) {
    this.userAuth.set(value);
  }

  getAuth() {
    return this.userAuth;
  }

  getAuthAsObservable() {
    return toObservable(this.userAuth);
  }

  setPopUp(value: boolean) {
    this.showActivatePopUp.set(value);
  }

  getPopUp() {
    return this.showActivatePopUp;
  }

  getPopUpAsObservable() {
    return toObservable(this.showActivatePopUp);
  }

  getAuthorized() {
    return this.isAuthorized;
  }

  setAuthorized(value: boolean) {
    this.store.select(AuthSelectors.selectAuthAuthenticated).pipe(
      map((auth) => {
        if (auth) {
          this.isAuthorized.set(false);
        } else {
          this.isAuthorized.set(value);
        }
      })
    );
  }
}
