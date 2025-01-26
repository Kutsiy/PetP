import { Component, ElementRef, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.scss',
  standalone: false,
})
export class LoginFormWidgetComponent {
  constructor(public readonly elementRef: ElementRef) {}
  @Output() action = new EventEmitter<void>();

  activate() {
    this.action.emit();
  }
}
