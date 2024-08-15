import { AfterViewInit, Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrl: './side-menu.component.scss',
})
export class SideMenuComponent {
  @Output() notify: EventEmitter<string> = new EventEmitter<string>();

  notifyParent(message: string) {
    this.notify.emit(message);
  }

  filterDisplay = [
    { value: 'vertically', viewValue: 'vertically' },
    { value: 'horizontally', viewValue: 'horizontally' },
  ];
  selected: string = this.filterDisplay[0].value;
  onSelectionChange(event: any): void {
    this.notifyParent(this.selected);
  }
}
