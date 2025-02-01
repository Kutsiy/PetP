import { NgModule } from '@angular/core';
import { LoginFormWidgetComponent } from './login-form.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [LoginFormWidgetComponent],
  imports: [ReactiveFormsModule],
  exports: [LoginFormWidgetComponent],
})
export class LoginFormWidgetModule {}
