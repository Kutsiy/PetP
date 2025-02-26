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
import { map } from 'rxjs';

@Injectable()
export class NotAuthGuard implements CanActivate {
  constructor(private readonly store: Store, private readonly router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): MaybeAsync<GuardResult> {
    return this.store.select(AuthSelectors.selectAuthState).pipe(
      map(({ isActive, isAuth }) => {
        if (!isAuth) {
          this.router.navigate(['/not-auth']);
          return false;
        }
        return true;
      })
    );
  }
}
