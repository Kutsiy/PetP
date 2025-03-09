import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, exhaustMap, map, of } from 'rxjs';
import { AuthService } from '../../../features';
import * as AuthActions from './auth.actions';

@Injectable()
export class AuthEffects {
  private actions$ = inject(Actions);
  private authService = inject(AuthService);

  loadUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.authGetUser),
      exhaustMap(() => {
        if (!this.authService) {
          return of(AuthActions.authSetUser({ user: null }));
        }
        return this.authService.getUser().pipe(
          map((data) => {
            if (!data) {
              return AuthActions.authSetUser({ user: null });
            }
            const user = {
              id: data.id,
              email: data.email,
              isActivated: data.isActivated,
            };

            return AuthActions.authSetUserAndAuthenticated({
              user,
              value: true,
            });
          }),
          catchError((error) => of(error))
        );
      })
    )
  );
}
