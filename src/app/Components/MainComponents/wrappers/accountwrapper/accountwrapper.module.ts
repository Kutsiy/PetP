import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountwrapperComponent } from './accountwrapper.component';
import { AppRoutingModule } from '../../../../app-routing.module';

@NgModule({
  declarations: [AccountwrapperComponent],
  imports: [CommonModule, AppRoutingModule],
  exports: [AccountwrapperComponent],
})
export class AccountwrapperModule {}
