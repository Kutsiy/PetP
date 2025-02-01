import { NgModule } from '@angular/core';
import { SignUpFormWidgetComponent } from './sign-up-form.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [SignUpFormWidgetComponent],
  imports: [ReactiveFormsModule],
  exports: [SignUpFormWidgetComponent],
})
export class SignUpFormWidgetModule {}
