import { NgModule } from '@angular/core';
import { LoginFormWidgetComponent } from './login-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthStoreModule } from '../../../shared/store';

@NgModule({
  declarations: [LoginFormWidgetComponent],
  imports: [ReactiveFormsModule, AuthStoreModule],
  exports: [LoginFormWidgetComponent],
})
export class LoginFormWidgetModule {}
