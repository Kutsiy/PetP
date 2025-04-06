import { NgModule } from '@angular/core';
import { PostWidgetComponent } from './post.component';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { DatePipeModule } from '../../shared/pipes';

@NgModule({
  declarations: [PostWidgetComponent],
  imports: [MatIconModule, RouterModule, DatePipeModule],
  exports: [PostWidgetComponent],
})
export class PostWidgetModule {}
