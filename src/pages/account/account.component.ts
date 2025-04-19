import { Component, OnInit, signal } from '@angular/core';
import { AuthService } from '../../features';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import * as AuthActions from '../../shared/store/auth/auth.actions';
import { AuthServiceStore } from '../../shared/services/auth.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrl: './account.component.scss',
  standalone: false,
})
export class AccountPageComponent {
  logoutState = signal(true);
  deleteAccountState = signal(true);

  constructor(
    private readonly authService: AuthService,
    private readonly store: Store,
    private readonly router: Router,
    private readonly authServiceStore: AuthServiceStore
  ) {}

  logOut() {
    this.authService.logOut()?.subscribe();
    this.store.dispatch(AuthActions.authSetAuthenticated({ value: false }));
    this.store.dispatch(
      AuthActions.authSetUser({ user: null, settings: { avatar: null } })
    );
    this.authServiceStore.setAuth(false);
    this.authServiceStore.setActivate(false);
    this.router.navigate(['/']);
  }

  changeLogoutState = () => {
    this.logoutState.update((state: boolean) => !state);
    this.deleteAccountState.update((state: boolean) => true);
  };
  changeDeleteAccountState = () => {
    this.deleteAccountState.update((state: boolean) => !state);
    this.logoutState.update((state: boolean) => true);
  };

  closeAll() {
    this.logoutState.update((state: boolean) => true);
    this.deleteAccountState.update((state: boolean) => true);
  }

  deleteAccount() {
    this.authService.deleteAccount()?.subscribe();
    this.store.dispatch(AuthActions.authSetAuthenticated({ value: false }));
    this.store.dispatch(
      AuthActions.authSetUser({
        user: { email: '', id: '', isActivated: false },
        settings: { avatar: null },
      })
    );
    this.authServiceStore.setAuth(false);
    this.authServiceStore.setActivate(false);
    this.router.navigate(['/']);
  }
}
