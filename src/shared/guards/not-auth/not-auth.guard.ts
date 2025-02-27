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
import { filter, map, Observable, take } from 'rxjs';

@Injectable()
export class NotAuthGuard implements CanActivate {
  constructor(private readonly store: Store, private readonly router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    return this.store.select(AuthSelectors.selectAuthState).pipe(
      filter(({ isActive, isAuth }) => isAuth !== null),
      map(({ isAuth }) => {
        if (!isAuth) {
          this.router.navigate(['/not-auth']);
          return false;
        } else {
          return true;
        }
      })
    );
  }
}
