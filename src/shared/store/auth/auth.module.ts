import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { stateName } from './auth.constant';
import { authReducer } from './auth.reducer';
import { EffectsModule } from '@ngrx/effects';
import { AuthEffects } from './auth.effect';
import { AuthService } from '../../../features';

@NgModule({
  declarations: [],
  imports: [
    StoreModule.forFeature(stateName, authReducer),
    EffectsModule.forFeature([AuthEffects]),
  ],
  providers: [AuthService],
  exports: [],
})
export class AuthStoreModule {}
