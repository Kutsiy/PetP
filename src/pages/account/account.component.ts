import { Component, OnInit, signal } from '@angular/core';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrl: './account.component.scss',
  standalone: false,
})
export class AccountPageComponent {
  logoutState = signal(true);

  changeLogoutState = () => {
    this.logoutState.update((state: boolean) => !state);
  };
}
