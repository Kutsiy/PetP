import { NgModule } from '@angular/core';
import { SignUpFormWidgetComponent } from './sign-up-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthStoreModule } from '../../../shared/store';
import { AuthFeatModule } from '../../../features/auth/auth.module';

@NgModule({
  declarations: [SignUpFormWidgetComponent],
  imports: [ReactiveFormsModule, AuthStoreModule, AuthFeatModule],
  exports: [SignUpFormWidgetComponent],
})
export class SignUpFormWidgetModule {}
