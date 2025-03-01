import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotAuthPageComponent } from './not-auth.component';
import { BaseButtonUiModule } from '../../shared/ui';

const routes: Routes = [{ path: '', component: NotAuthPageComponent }];

@NgModule({
  declarations: [NotAuthPageComponent],
  imports: [RouterModule, RouterModule.forChild(routes), BaseButtonUiModule],
  exports: [NotAuthPageComponent],
})
export class NotAuthPageModule {}
