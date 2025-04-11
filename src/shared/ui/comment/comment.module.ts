import { NgModule } from '@angular/core';
import { CommentUIComponent } from './comment.component';
import { DatePipeModule } from '../../pipes';

@NgModule({
  declarations: [CommentUIComponent],
  imports: [DatePipeModule],
  exports: [CommentUIComponent],
})
export class CommentUiModule {}
