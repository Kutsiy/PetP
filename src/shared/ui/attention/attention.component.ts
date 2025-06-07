import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import * as AuthActions from './../../store/auth/auth.actions';
import { AuthServiceStore } from '../../services/auth.service';

@Component({
  selector: 'app-attention',
  standalone: false,

  templateUrl: './attention.component.html',
  styleUrl: './attention.component.scss',
})
export class AttentionUiComponent {
  constructor(
    private readonly store: Store,
    private readonly authServiceStore: AuthServiceStore
  ) {}

  close() {
    // this.store.dispatch(AuthActions.authSetAttention({ value: false }));
    // this.authServiceStore.setAuthorized(false);
  }
}
