import {
  Component,
  ElementRef,
  EventEmitter,
  Output,
  OnDestroy,
} from '@angular/core';
import {
  FormControl,
  FormGroup,
  NonNullableFormBuilder,
  Validators,
} from '@angular/forms';
import { AuthService } from '../../../features';
import * as AuthActions from './../../../shared/store/auth/auth.actions';
import { Store } from '@ngrx/store';
import * as AuthSelectors from '../../../shared/store/auth/auth.selectors';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { AuthServiceStore } from '../../../shared/services/auth.service';

interface FormType {
  email: FormControl<string>;
  password: FormControl<string>;
}

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.scss',
  standalone: false,
})
export class LoginFormWidgetComponent implements OnDestroy {
  loginForm: FormGroup<FormType>;
  isSubmitted = false;
  isInvalid = false;
  error: Observable<string | null> = new Observable<string | null>();
  constructor(
    public readonly elementRef: ElementRef,
    private formBuilder: NonNullableFormBuilder,
    private authService: AuthService,
    private store: Store,
    private readonly router: Router,
    private readonly authServiceStore: AuthServiceStore
  ) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });

    this.error = this.store.select(AuthSelectors.selectLoginError);
  }

  ngOnDestroy(): void {
    this.store.dispatch(AuthActions.authSetLoginError({ message: null }));
  }

  @Output() action = new EventEmitter<void>();

  activate() {
    this.action.emit();
  }

  onSubmit() {
    this.isSubmitted = true;

    if (this.loginForm.invalid) {
      return;
    }

    const { email, password } = this.loginForm.value;

    if (email && password) {
      this.store.dispatch(AuthActions.authSetLoading({ value: true }));
      this.authService.login(email, password)?.subscribe(
        (data) => {
          this.loginForm.reset();
          this.store.dispatch(
            AuthActions.authSetAuthenticated({ value: true })
          );
          if (data.user) {
            this.store.dispatch(
              AuthActions.authSetUser({
                user: data.user,
                settings: {
                  avatar: `http://localhost:3000${data.user.avatarLink}`,
                },
              })
            );
          }
          this.authServiceStore.setAuth(true);
          this.authServiceStore.setActivate(data.user.isActivated);
          this.isSubmitted = false;
          this.router.navigate(['/']);
        },
        (error) => {
          this.store.dispatch(
            AuthActions.authSetLoginError({ message: error.message })
          );
        }
      );
    }
  }

  validInput(field: keyof FormType) {
    const control = this.loginForm.get(field);
    return (
      control?.invalid &&
      (control?.dirty || control?.touched || this.isSubmitted)
    );
  }

  getError(field: keyof FormType, errorMassage: string) {
    const control = this.loginForm.get(field);
    return (
      control?.hasError(errorMassage) &&
      (control.dirty || control.touched || this.isSubmitted)
    );
  }
}
