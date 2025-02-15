import { NgModule } from '@angular/core';
import { LoginFormWidgetComponent } from './login-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthStoreModule } from '../../../shared/store';
import { AuthFeatModule } from '../../../features/auth/auth.module';

@NgModule({
  declarations: [LoginFormWidgetComponent],
  imports: [ReactiveFormsModule, AuthStoreModule, AuthFeatModule],
  exports: [LoginFormWidgetComponent],
})
export class LoginFormWidgetModule {}
