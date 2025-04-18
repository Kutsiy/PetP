import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-warning-card',
  standalone: false,

  templateUrl: './warning-card.component.html',
  styleUrl: './warning-card.component.scss',
})
export class WarningCardUiComponent {
  @Output() onChange = new EventEmitter();
  @Output() onFunction = new EventEmitter();

  logOut = () => {};

  func() {
    this.onFunction.emit();
  }

  change = () => {
    this.onChange.emit();
  };
}
