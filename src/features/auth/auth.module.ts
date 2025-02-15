import { NgModule } from '@angular/core';
import { AuthService } from './auth.service';
import { HTTP_INTERCEPTORS, provideHttpClient, withInterceptors } from '@angular/common/http';
import { authInterceptor } from './interceptor/auth.interceptor';


@NgModule({
  declarations: [],
  providers: [AuthService, provideHttpClient(withInterceptors([authInterceptor]))],
  imports: [],
  exports: [],
})
export class AuthFeatModule {}
