import {
  Component,
  ElementRef,
  EventEmitter,
  OnDestroy,
  Output,
} from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  NonNullableFormBuilder,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { AuthService } from '../../../features';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import * as AuthActions from './../../../shared/store/auth/auth.actions';
import * as AuthSelectors from '../../../shared/store/auth/auth.selectors';
import { Router } from '@angular/router';
import { AuthServiceStore } from '../../../shared/services/auth.service';

interface FormType {
  userName: FormControl<string>;
  email: FormControl<string>;
  password: FormControl<string>;
  confirmPassword: FormControl<string>;
}

@Component({
  selector: 'app-sign-up-form',
  templateUrl: './sign-up-form.component.html',
  styleUrl: './sign-up-form.component.scss',
  standalone: false,
})
export class SignUpFormWidgetComponent implements OnDestroy {
  signUpForm: FormGroup<FormType>;
  isSubmitted = false;
  isInvalid = false;
  passwordsNotSame = false;
  error: Observable<string | null> = new Observable<string | null>();
  constructor(
    public readonly elementRef: ElementRef,
    private formBuilder: NonNullableFormBuilder,
    private authService: AuthService,
    private store: Store,
    private readonly router: Router,
    private readonly authServiceStore: AuthServiceStore
  ) {
    this.signUpForm = this.formBuilder.group({
      userName: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(6),
          this.strongPasswordValidator,
        ],
      ],
      confirmPassword: [
        '',
        [
          Validators.required,
          Validators.minLength(6),
          this.strongPasswordValidator,
        ],
      ],
    });

    this.signUpForm.controls.password.valueChanges.subscribe(() => {
      this.checkPasswordsMatch();
    });
    this.signUpForm.controls.confirmPassword.valueChanges.subscribe(() => {
      this.checkPasswordsMatch();
    });

    this.error = this.store.select(AuthSelectors.selectSignUpError);
  }
  ngOnDestroy(): void {
    this.store.dispatch(AuthActions.authSetSignUpError({ message: null }));
  }
  @Output() action = new EventEmitter<void>();

  activate() {
    this.action.emit();
  }

  strongPasswordValidator(control: AbstractControl): ValidationErrors | null {
    const value: string = control.value;

    const hasUpperCase = /[A-ZА-ЯЁЇІЄҐ]/.test(value);
    const hasLowerCase = /[a-zа-яёїієґ]/.test(value);
    const hasNumber = /[0-9]/.test(value);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(value);

    const errors: any = {};

    if (!hasUpperCase) errors.hasUpperCase = true;
    if (!hasLowerCase) errors.hasLowerCase = true;
    if (!hasNumber) errors.hasNumber = true;
    if (!hasSpecialChar) errors.hasSpecialChar = true;

    return Object.keys(errors).length > 0 ? { strongPassword: errors } : null;
  }

  checkPasswordsMatch() {
    const password = this.signUpForm.controls.password.value;
    const confirmPassword = this.signUpForm.controls.confirmPassword.value;
    this.passwordsNotSame = password !== confirmPassword;
  }

  onSubmit() {
    this.isSubmitted = true;

    if (this.signUpForm.invalid) {
      return;
    }

    const { userName, email, password } = this.signUpForm.value;

    if (userName && email && password) {
      this.store.dispatch(AuthActions.authSetLoading({ value: true }));
      this.authService.signUp(userName, email, password)?.subscribe(
        (data) => {
          this.signUpForm.reset();
          if (data.user) {
            this.store.dispatch(AuthActions.authGetUser());
          }

          this.isSubmitted = false;

          this.router.navigate(['/']);
        },
        (error) => {
          this.store.dispatch(
            AuthActions.authSetSignUpError({ message: error.message })
          );
        }
      );
    }
  }

  validInput(field: keyof FormType) {
    const control = this.signUpForm.get(field);
    return (
      control?.invalid &&
      (control?.dirty || control?.touched || this.isSubmitted)
    );
  }

  getError(field: keyof FormType, errorMassage: string) {
    const control = this.signUpForm.get(field);
    return (
      control?.hasError(errorMassage) &&
      (control.dirty || control.touched || this.isSubmitted)
    );
  }

  getStrongPasswordError(field: keyof FormType, key: string): boolean {
    const control = this.signUpForm.get(field);
    const error = control?.getError('strongPassword');
    return (
      error &&
      error?.[key] === true &&
      (control?.dirty || control?.touched || this.isSubmitted)
    );
  }
}
