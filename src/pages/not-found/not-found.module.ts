import { NgModule } from '@angular/core';
import { NotFoundPageComponent } from './not-found.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: '', component: NotFoundPageComponent }];

@NgModule({
  declarations: [NotFoundPageComponent],
  imports: [RouterModule, RouterModule.forChild(routes)],
  exports: [NotFoundPageComponent],
})
export class NotFoundPageModule {}
