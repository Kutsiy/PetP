import { Component, OnInit, signal } from '@angular/core';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrl: './account.component.scss',
  standalone: false,
})
export class AccountPageComponent {
  logoutState = signal(true);
  deleteAccountState = signal(true);

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
}
