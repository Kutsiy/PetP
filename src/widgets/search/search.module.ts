import { NgModule } from '@angular/core';
import { SearchWidgetComponent } from './search.component';
import { MatIcon } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { PostsFeatModule } from '../../features';

@NgModule({
  declarations: [SearchWidgetComponent],
  imports: [MatIcon, FormsModule, PostsFeatModule],
  exports: [SearchWidgetComponent],
})
export class SearchWidgetModule {}
