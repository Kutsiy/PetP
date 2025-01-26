import { NgModule } from '@angular/core';
import { ContactsWidgetComponent } from './contacts.component';
import { CardUiModule } from '../../shared/ui';

@NgModule({
  declarations: [ContactsWidgetComponent],
  imports: [CardUiModule],
  exports: [ContactsWidgetComponent],
})
export class ContactsWidgetModule {}
