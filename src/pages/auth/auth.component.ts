import { AfterViewInit, Component, ElementRef } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import * as AuthAction from './../../shared/store/auth';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss',
  standalone: false,
})
export class AuthPageComponent implements AfterViewInit {
  element: HTMLDivElement | null = null;
  elementLogin: HTMLDivElement | null = null;
  elementSignUp: HTMLDivElement | null = null;
  isLogin: boolean = true;
  addStyle: boolean = false;
  authType: string | null = null;

  constructor(
    private elementRef: ElementRef,
    private router: Router,
    private route: ActivatedRoute,
    private store: Store
  ) {}

  ngAfterViewInit(): void {
    this.element = this.elementRef.nativeElement.querySelector(
      '.auth__box'
    ) as HTMLDivElement;
    this.elementLogin =
      this.elementRef.nativeElement.querySelector('app-login-form');
    this.elementSignUp =
      this.elementRef.nativeElement.querySelector('app-sign-up-form');
    this.route.queryParams.subscribe((params) => {
      if (this.element) {
        this.authType = params['authType'];
        if (
          params['authType'] === undefined ||
          (params['authType'] !== 'login' && params['authType'] !== 'sign_up')
        ) {
          this.router.navigate([], {
            queryParams: { authType: 'login' },
          });
        }
        if (params['authType'] === 'login') {
          this.element.classList.remove('active');
        } else if (params['authType'] === 'sign_up') {
          this.element.classList.add('active');
        }
      }
    });
  }

  styiles() {
    if (this.element && this.elementLogin && this.elementSignUp) {
      this.element.classList.add('auth__time');
      this.elementLogin.classList.add('auth__time');
      this.elementSignUp.classList.add('auth__time');
    }
    this.addStyle = true;
  }

  activate() {
    if (this.authType === 'login') {
      this.router.navigate([], {
        queryParams: { authType: 'sign_up' },
      });
    } else if (this.authType === 'sign_up') {
      this.router.navigate([], {
        queryParams: { authType: 'login' },
      });
    }
    if (!this.addStyle) {
      this.styiles();
    }
    if (this.element && this.isLogin) {
      this.element.classList.toggle('active');
    }
  }
}
