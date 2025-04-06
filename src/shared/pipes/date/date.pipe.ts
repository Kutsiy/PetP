import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateToYYYYMMDD',
  standalone: false,
})
export class DateToYYYYMMDDPipe implements PipeTransform {
  transform(value: number | undefined): string {
    if (!value) return '';
    const date = new Date(value * 1000);
    const dateString = date.toISOString().split('T')[0];
    const timeString = date.toTimeString().split(' ')[0];
    return `${dateString}; ${timeString}`;
  }
}
