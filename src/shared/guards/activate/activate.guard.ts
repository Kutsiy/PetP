import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { computed, inject } from '@angular/core';
import { AuthServiceStore } from '../../services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthActivateGuard implements CanActivate {
  private authService = inject(AuthServiceStore);
  private router = inject(Router);

  canActivate(): boolean {
    const isAuth = this.authService.getAuth()();
    const isActivated = this.authService.getActivate()();

    if (isAuth && !isActivated) {
      this.authService.setPopUp(true);
      return false;
    }

    return true;
  }
}
