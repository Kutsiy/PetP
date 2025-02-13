import { NgModule } from '@angular/core';
import { AuthPageComponent } from './auth.component';
import { LoginFormWidgetModule, SignUpFormWidgetModule } from '../../widgets';
import { AuthStoreModule } from '../../shared/store';

@NgModule({
  declarations: [AuthPageComponent],
  imports: [LoginFormWidgetModule, SignUpFormWidgetModule, AuthStoreModule],
  exports: [AuthPageComponent],
})
export class AuthPageModule {}
