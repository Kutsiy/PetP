import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import * as AuthActions from './../../shared/store/auth/auth.actions';
import { AuthServiceStore } from '../../shared/services/auth.service';

@Component({
  selector: 'app-activate-account',
  standalone: false,

  templateUrl: './activate-account.component.html',
  styleUrl: './activate-account.component.scss',
})
export class ActivateAccountWidgetComponent {
  constructor(
    private readonly store: Store,
    private readonly authServiceStore: AuthServiceStore
  ) {}

  close() {
    this.store.dispatch(
      AuthActions.authSetActivateAccountPopUp({ value: false })
    );
    this.authServiceStore.setPopUp(false);
  }
}
