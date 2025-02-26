import { Component } from '@angular/core';
import { AuthService } from '../../features';
import { Store } from '@ngrx/store';
import * as AuthActions from './../../shared/store/auth/auth.actions';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrl: './account.component.scss',
  standalone: false,
})
export class AccountPageComponent {
  constructor(
    private readonly authService: AuthService,
    private readonly store: Store
  ) {}

  logOut() {
    this.authService.logOut()?.subscribe();
    this.store.dispatch(AuthActions.authSetAuthenticated({ value: false }));
    this.store.dispatch(AuthActions.authSetUser({ user: null }));
  }
}
