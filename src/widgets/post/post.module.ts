import { NgModule } from '@angular/core';
import { PostWidgetComponent } from './post.component';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [PostWidgetComponent],
  imports: [MatIconModule, RouterModule],
  exports: [PostWidgetComponent],
})
export class PostWidgetModule {}
