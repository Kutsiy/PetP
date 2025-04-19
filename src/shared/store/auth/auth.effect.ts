import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, exhaustMap, map, of } from 'rxjs';
import { AuthService } from '../../../features';
import * as AuthActions from './auth.actions';
import { AuthServiceStore } from '../../services/auth.service';

@Injectable()
export class AuthEffects {
  private actions$ = inject(Actions);
  private authService = inject(AuthService);
  private authServiceStore = inject(AuthServiceStore);

  loadUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.authGetUser),
      exhaustMap(() => {
        if (!this.authService) {
          return of(AuthActions.authSetUser({ user: null, settings: null }));
        }
        return this.authService.getUser().pipe(
          map((data) => {
            if (!data) {
              return AuthActions.authSetUser({ user: null, settings: null });
            }
            this.authServiceStore.setAuth(true);
            this.authServiceStore.setActivate(data.isActivated);
            this.authServiceStore.setPopUp(!data.isActivated);

            return AuthActions.authSetUserAndAuthenticated({
              user: {
                id: data.id,
                email: data.email,
                isActivated: data.isActivated,
              },
              value: true,
              settings: {
                avatar:
                  data.avatarLink !== ''
                    ? `http://localhost:3000${data.avatarLink}`
                    : '',
              },
            });
          }),
          catchError(() => {
            this.authServiceStore.setAuth(false);
            this.authServiceStore.setPopUp(true);
            this.authServiceStore.setActivate(false);
            return of(
              AuthActions.authSetUserAndAuthenticated({
                user: {
                  id: '',
                  email: '',
                  isActivated: false,
                },
                value: false,
                settings: {
                  avatar: null,
                },
              })
            );
          })
        );
      })
    )
  );
}
