import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {
  @Input() title: string | undefined;
  @Input() image: string | undefined;
  @Input() link: string | undefined;
}
