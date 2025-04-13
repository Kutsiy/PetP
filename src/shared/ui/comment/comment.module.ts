import { NgModule } from '@angular/core';
import { CommentUIComponent } from './comment.component';
import { DatePipeModule } from '../../pipes';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [CommentUIComponent],
  imports: [DatePipeModule, MatIconModule],
  exports: [CommentUIComponent],
})
export class CommentUiModule {}
