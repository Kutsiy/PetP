import { Component, ElementRef, EventEmitter, Output } from '@angular/core';
import {
  FormControl,
  FormGroup,
  NonNullableFormBuilder,
  Validators,
} from '@angular/forms';
import { AuthService } from '../../../features';

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
export class SignUpFormWidgetComponent {
  signUpForm: FormGroup<FormType>;
  isSubmitted = false;
  isInvalid = false;
  passwordsNotSame = false;
  constructor(
    public readonly elementRef: ElementRef,
    private formBuilder: NonNullableFormBuilder,
    private authService: AuthService
  ) {
    this.signUpForm = this.formBuilder.group({
      userName: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(6)]],
    });

    this.signUpForm.controls.password.valueChanges.subscribe(() => {
      this.checkPasswordsMatch();
    });
    this.signUpForm.controls.confirmPassword.valueChanges.subscribe(() => {
      this.checkPasswordsMatch();
    });
  }
  @Output() action = new EventEmitter<void>();

  activate() {
    this.action.emit();
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
      this.authService.signUp(userName, email, password)?.subscribe(
        () => {
          this.signUpForm.reset();
          this.isSubmitted = false;
        },
        (error) => {}
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
}
