import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { stateName } from './auth.constant';
import { authReducer } from './auth.reducer';

@NgModule({
  declarations: [],
  imports: [StoreModule.forFeature(stateName, authReducer)],
  exports: [],
})
export class AuthStoreModule {}
