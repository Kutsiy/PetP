import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountPageComponent } from './account.component';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  declarations: [AccountPageComponent],
  imports: [CommonModule, AppRoutingModule],
  exports: [AccountPageComponent],
})
export class AccountPageModule {}
