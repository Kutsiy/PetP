import { NgModule } from '@angular/core';
import { SignUpFormWidgetComponent } from './sign-up-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthStoreModule } from '../../../shared/store';
import { AuthFeatModule } from '../../../features/auth/auth.module';
import { CommonModule } from '@angular/common';
import { AuthServiceStore } from '../../../shared/services/auth.service';

@NgModule({
  declarations: [SignUpFormWidgetComponent],
  imports: [ReactiveFormsModule, AuthStoreModule, AuthFeatModule, CommonModule],
  providers: [AuthServiceStore],
  exports: [SignUpFormWidgetComponent],
})
export class SignUpFormWidgetModule {}
