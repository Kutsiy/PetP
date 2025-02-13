import { Component, ElementRef, EventEmitter, Output } from '@angular/core';
import {
  FormControl,
  FormGroup,
  NonNullableFormBuilder,
  Validators,
} from '@angular/forms';
import { AuthService } from '../../../features';
import * as AuthAction from './../../../shared/store/auth/auth.actions';
import { Store } from '@ngrx/store';

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
export class LoginFormWidgetComponent {
  loginForm: FormGroup<FormType>;
  isSubmitted = false;
  isInvalid = false;
  constructor(
    public readonly elementRef: ElementRef,
    private formBuilder: NonNullableFormBuilder,
    private authService: AuthService,
    private store: Store
  ) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
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
      this.authService.login(email, password)?.subscribe((data) => {
        this.loginForm.reset();
        this.store.dispatch(AuthAction.authSetAuthenticated());
        console.log(data);
        this.isSubmitted = false;
      });
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
