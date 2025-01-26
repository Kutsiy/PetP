import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { PostPageComponent } from './post-page.component';

@NgModule({
  declarations: [PostPageComponent],
  imports: [RouterModule, MatIconModule],
  exports: [PostPageComponent],
})
export class PostPageModule {}
