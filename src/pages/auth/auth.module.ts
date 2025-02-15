import { NgModule } from '@angular/core';
import { AuthPageComponent } from './auth.component';
import { LoginFormWidgetModule, SignUpFormWidgetModule } from '../../widgets';
import { AuthStoreModule } from '../../shared/store';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: '', component: AuthPageComponent }];
@NgModule({
  declarations: [AuthPageComponent],
  imports: [
    LoginFormWidgetModule,
    SignUpFormWidgetModule,
    RouterModule.forChild(routes),
  ],
  exports: [AuthPageComponent],
})
export class AuthPageModule {}
