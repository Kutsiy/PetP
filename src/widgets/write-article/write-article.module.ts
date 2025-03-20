import { NgModule } from '@angular/core';
import { WriteArticleWidgetComponent } from './write-article.component';
import { QuillModule } from 'ngx-quill';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [WriteArticleWidgetComponent],
  imports: [
    QuillModule.forRoot({
      theme: 'dark',
      modules: {
        syntax: true,
      },
    }),
    FormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
  ],
  exports: [WriteArticleWidgetComponent],
})
export class WriteArticleWidgetModule {}
