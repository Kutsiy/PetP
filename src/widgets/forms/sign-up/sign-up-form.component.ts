import { Component, ElementRef, EventEmitter, Output } from '@angular/core';
import {
  FormControl,
  FormGroup,
  NonNullableFormBuilder,
  Validators,
} from '@angular/forms';

interface FormType {
  name: FormControl<string>;
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
  constructor(
    public readonly elementRef: ElementRef,
    private formBuilder: NonNullableFormBuilder
  ) {
    this.signUpForm = this.formBuilder.group({
      name: ['', Validators.required, Validators.minLength(3)],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(6)]],
    });
  }
  @Output() action = new EventEmitter<void>();

  activate() {
    this.action.emit();
  }

  onSubmit() {
    console.log(this.signUpForm.value);
    this.isSubmitted = true;
  }

  validInput(field: string) {
    return (
      this.signUpForm.get(field)?.invalid &&
      (this.signUpForm.get(field)?.dirty ||
        this.signUpForm.get(field)?.touched ||
        this.isSubmitted)
    );
  }

  getError(field: keyof FormType, errorMassage: string) {
    if (errorMassage === 'required') {
      return (
        (this.signUpForm.get(field)?.hasError('required') &&
          (this.signUpForm.get(field)?.dirty ||
            this.signUpForm.get(field)?.touched)) ||
        this.isSubmitted
      );
    }
    return (
      (this.signUpForm.get(field)?.hasError(errorMassage) ||
        this.isSubmitted) ??
      false
    );
  }
}
