import { NgModule } from '@angular/core';
import { SignUpFormWidgetComponent } from './sign-up-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthStoreModule } from '../../../shared/store';

@NgModule({
  declarations: [SignUpFormWidgetComponent],
  imports: [ReactiveFormsModule, AuthStoreModule],
  exports: [SignUpFormWidgetComponent],
})
export class SignUpFormWidgetModule {}
