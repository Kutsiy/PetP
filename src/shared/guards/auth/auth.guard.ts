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
  constructor(
    private readonly store: Store,
    private readonly router: Router,
    private location: Location
  ) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    return this.store.select(AuthSelectors.selectAuthState).pipe(
      filter(({ isAuth }) => isAuth !== null),
      take(100),
      tap(({ isActive, isAuth }) => {
        if (isAuth) {
          this.router.navigate(['/']);
        }
      }),
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
