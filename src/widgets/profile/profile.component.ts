import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as AuthSelectors from './../../shared/store/auth/auth.selectors';
import { User } from '../../shared/store/auth/auth.reducer';
import { AuthService } from '../../features';

interface UserInfo {
  name: string;
  email: string;
  roles: string[];
}

@Component({
  selector: 'app-accountwrapper',
  templateUrl: './profile.component.html',
  styleUrl: './profile.components.scss',
  standalone: false,
})
export class ProfileWidgetComponent implements OnInit {
  user: UserInfo | null = { name: '', email: '', roles: [] };

  constructor(private readonly authService: AuthService) {}

  ngOnInit(): void {
    this.authService.getAllInfoAboutUser()?.subscribe((data) => {
      this.user = data;
    });
  }
}
