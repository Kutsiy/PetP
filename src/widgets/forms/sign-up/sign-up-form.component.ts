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
  }
  @Output() action = new EventEmitter<void>();

  activate() {
    this.action.emit();
  }

  onSubmit() {
    if (this.signUpForm.invalid) {
      this.isInvalid = true;
    } else {
      this.isSubmitted = true;
      const { userName, email, password, confirmPassword } =
        this.signUpForm.value;
      if (password?.toLowerCase() !== confirmPassword?.toLowerCase()) {
        this.passwordsNotSame = true;
        return;
      }

      if (userName && email && password)
        this.authService
          .signUp(userName, email, password)
          ?.subscribe((data) => {
            console.log(data);
            console.log(document.cookie);
          });
    }
  }

  validInput(field: keyof FormType) {
    return (
      this.signUpForm.get(field)?.invalid &&
      (this.signUpForm.get(field)?.dirty ||
        this.signUpForm.get(field)?.touched ||
        this.isInvalid)
    );
  }

  getError(field: keyof FormType, errorMassage: string) {
    if (errorMassage === 'required') {
      return (
        (this.signUpForm.get(field)?.hasError('required') &&
          (this.signUpForm.get(field)?.dirty ||
            this.signUpForm.get(field)?.touched)) ||
        this.isInvalid
      );
    }
    return this.signUpForm.get(field)?.hasError(errorMassage) || this.isInvalid;
  }
}
