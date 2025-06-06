import { NgModule } from '@angular/core';
import { PostWidgetComponent } from './post.component';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { DatePipeModule } from '../../shared/pipes';
import { SlicePipe } from '@angular/common';

@NgModule({
  declarations: [PostWidgetComponent],
  imports: [MatIconModule, RouterModule, DatePipeModule, SlicePipe],
  exports: [PostWidgetComponent],
})
export class PostWidgetModule {}
