import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotAuthPageComponent } from './not-auth.component';

const routes: Routes = [{ path: '', component: NotAuthPageComponent }];

@NgModule({
  declarations: [NotAuthPageComponent],
  imports: [RouterModule, RouterModule.forChild(routes)],
  exports: [NotAuthPageComponent],
})
export class NotAuthPageModule {}
