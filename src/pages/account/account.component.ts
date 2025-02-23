import { Component } from '@angular/core';
import { AuthService } from '../../features';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrl: './account.component.scss',
  standalone: false,
})
export class AccountPageComponent {
  constructor(private readonly authService: AuthService) {}

  logOut() {
    this.authService.logOut()?.subscribe();
  }
}
