import { Component, ElementRef, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-sign-up-form',
  templateUrl: './sign-up-form.component.html',
  styleUrl: './sign-up-form.component.scss',
  standalone: false,
})
export class SignUpFormWidgetComponent {
  constructor(public readonly elementRef: ElementRef) {}
  @Output() action = new EventEmitter<void>();

  activate() {
    this.action.emit();
  }
}
