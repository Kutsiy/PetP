import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotAuthPageComponent } from './not-auth.component';
import { BaseButtonUiComponent } from '../../shared/ui';

const routes: Routes = [{ path: '', component: NotAuthPageComponent }];

@NgModule({
  declarations: [NotAuthPageComponent, BaseButtonUiComponent],
  imports: [RouterModule, RouterModule.forChild(routes)],
  exports: [NotAuthPageComponent],
})
export class NotAuthPageModule {}
