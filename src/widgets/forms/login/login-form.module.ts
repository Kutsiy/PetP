import { NgModule } from '@angular/core';
import { LoginFormWidgetComponent } from './login-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthStoreModule } from '../../../shared/store';
import { AuthFeatModule } from '../../../features/auth/auth.module';
import { CommonModule } from '@angular/common';
import { AuthServiceStore } from '../../../shared/services/auth.service';

@NgModule({
  declarations: [LoginFormWidgetComponent],
  imports: [ReactiveFormsModule, AuthStoreModule, AuthFeatModule, CommonModule],
  providers: [AuthServiceStore],
  exports: [LoginFormWidgetComponent],
})
export class LoginFormWidgetModule {}
