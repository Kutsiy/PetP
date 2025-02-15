import { NgModule } from '@angular/core';
import { AuthService } from './auth.service';
import { AuthInterceptor } from '../../shared/interceptors/auth/auth.interceptor';

@NgModule({
  declarations: [],
  providers: [AuthService],
  imports: [],
  exports: [],
})
export class AuthFeatModule {}
