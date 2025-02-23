import { Component, Input } from '@angular/core';
import { AbstractBaseButton, ButtonType } from '../../../types';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-base-button',
  standalone: false,
  templateUrl: './base-button.component.html',
  styleUrl: './base-button.component.scss',
})
export class BaseButtonUiComponent extends AbstractBaseButton {
  @Input()
  override buttonType!: ButtonType;
  @Input()
  override onClick!: (event: MouseEvent) => void;
}
