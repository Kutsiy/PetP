import { NgModule } from '@angular/core';
import { SearchWidgetComponent } from './search.component';
import { MatIcon } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [SearchWidgetComponent],
  imports: [MatIcon, FormsModule],
  exports: [SearchWidgetComponent],
})
export class SearchWidgetModule {}
