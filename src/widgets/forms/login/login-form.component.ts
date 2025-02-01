import { Component, ElementRef, EventEmitter, Output } from '@angular/core';
import {
  FormControl,
  FormGroup,
  NonNullableFormBuilder,
  Validators,
} from '@angular/forms';

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
  constructor(
    public readonly elementRef: ElementRef,
    private formBuilder: NonNullableFormBuilder
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
    console.log(this.loginForm.invalid);
    this.isSubmitted = true;
  }

  validInput(field: string) {
    return (
      this.loginForm.get(field)?.invalid &&
      (this.loginForm.get(field)?.dirty ||
        this.loginForm.get(field)?.touched ||
        this.isSubmitted)
    );
  }

  getError(field: keyof FormType, errorMassage: string) {
    if (errorMassage === 'required') {
      return (
        (this.loginForm.get(field)?.hasError('required') &&
          (this.loginForm.get(field)?.dirty ||
            this.loginForm.get(field)?.touched)) ||
        this.isSubmitted
      );
    }
    return (
      (this.loginForm.get(field)?.hasError(errorMassage) || this.isSubmitted) ??
      false
    );
  }
}
