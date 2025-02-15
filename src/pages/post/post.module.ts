import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule, Routes } from '@angular/router';
import { PostPageComponent } from './post-page.component';

const routes: Routes = [{ path: '', component: PostPageComponent }];

@NgModule({
  declarations: [PostPageComponent],
  imports: [RouterModule, MatIconModule, RouterModule.forChild(routes)],
  exports: [PostPageComponent],
})
export class PostPageModule {}
