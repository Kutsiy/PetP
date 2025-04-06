import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule, Routes } from '@angular/router';
import { PostPageComponent } from './post-page.component';
import { QuillModule } from 'ngx-quill';
import { BaseButtonUiModule, CommentUiModule } from '../../shared/ui';
import { PostsFeatModule } from '../../features';
import { DatePipeModule } from '../../shared/pipes';

const routes: Routes = [{ path: '', component: PostPageComponent }];

@NgModule({
  declarations: [PostPageComponent],
  imports: [
    RouterModule,
    MatIconModule,
    RouterModule.forChild(routes),
    QuillModule.forRoot({
      theme: 'dark',
      modules: {
        syntax: true,
      },
    }),
    BaseButtonUiModule,
    CommentUiModule,
    PostsFeatModule,
    DatePipeModule,
  ],
  exports: [PostPageComponent],
})
export class PostPageModule {}
