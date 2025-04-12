import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  GuardResult,
  MaybeAsync,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { Store } from '@ngrx/store';
import * as AuthSelectors from '../../store/auth/auth.selectors';
import { filter, map, Observable, take, tap } from 'rxjs';
import { Location } from '@angular/common';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private readonly store: Store, private readonly router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    return this.store.select(AuthSelectors.selectAuthState).pipe(
      filter(({ isLoading }) => isLoading === false),
      filter(({ isAuth }) => isAuth !== null),
      take(1),
      map(({ isActive, isAuth }) => {
        if (isAuth) {
          return false;
        } else {
          return true;
        }
      })
    );
  }
}
