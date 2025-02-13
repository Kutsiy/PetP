import { Component, ElementRef, EventEmitter, Output } from '@angular/core';
import {
  FormControl,
  FormGroup,
  NonNullableFormBuilder,
  Validators,
} from '@angular/forms';
import { AuthService } from '../../../features';

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
    private authService: AuthService
  ) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });

    this.loginForm.controls.email.valueChanges.subscribe(() =>
      this.checkFieldValidity('email')
    );
    this.loginForm.controls.password.valueChanges.subscribe(() =>
      this.checkFieldValidity('password')
    );
  }
  @Output() action = new EventEmitter<void>();

  activate() {
    this.action.emit();
  }

  checkFieldValidity(field: keyof FormType) {
    if (this.isSubmitted) {
      const control = this.loginForm.get(field);
      if (control?.valid) {
        control.markAsUntouched();
      }
    }
  }

  onSubmit() {
    this.isSubmitted = true;

    if (this.loginForm.invalid) {
      return;
    }

    const { email, password } = this.loginForm.value;

    if (email && password) {
      this.authService.login(email, password)?.subscribe(() => {
        this.loginForm.reset();
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
