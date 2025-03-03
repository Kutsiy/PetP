import { NgModule } from '@angular/core';
import { WriteArticleWidgetComponent } from './write-article.component';
import { QuillModule } from 'ngx-quill';

@NgModule({
  declarations: [WriteArticleWidgetComponent],
  imports: [
    QuillModule.forRoot({
      theme: 'dark',
    }),
  ],
  exports: [WriteArticleWidgetComponent],
})
export class WriteArticleWidgetModule {}
