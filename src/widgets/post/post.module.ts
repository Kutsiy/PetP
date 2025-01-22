import { NgModule } from '@angular/core';
import { PostComponent } from './post.component';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [PostComponent],
  imports: [MatIconModule, RouterModule],
  exports: [PostComponent],
})
export class PostUiModule {}
