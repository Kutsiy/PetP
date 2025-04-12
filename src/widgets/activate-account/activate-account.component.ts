import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import * as AuthActions from './../../shared/store/auth/auth.actions';
import { AuthServiceStore } from '../../shared/services/auth.service';
import { AuthService } from '../../features';

@Component({
  selector: 'app-activate-account',
  standalone: false,

  templateUrl: './activate-account.component.html',
  styleUrl: './activate-account.component.scss',
})
export class ActivateAccountWidgetComponent {
  constructor(
    private readonly store: Store,
    private readonly authServiceStore: AuthServiceStore,
    private readonly authService: AuthService
  ) {}

  resultText: any;

  close() {
    this.store.dispatch(
      AuthActions.authSetActivateAccountPopUp({ value: false })
    );
    this.authServiceStore.setPopUp(false);
  }

  sendMail = () => {
    this.authService.sendMail().subscribe((value) => {
      this.resultText = value.result;
    });
  };
}
