import { NgModule } from '@angular/core';
import { DateToYYYYMMDDPipe } from './date.pipe';

@NgModule({
  declarations: [DateToYYYYMMDDPipe],
  exports: [DateToYYYYMMDDPipe],
})
export class DatePipeModule {}
