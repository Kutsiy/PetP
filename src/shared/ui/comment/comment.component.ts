import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-comment',
  standalone: false,

  templateUrl: './comment.component.html',
  styleUrl: './comment.component.scss',
})
export class CommentUIComponent {
  @Input() nick!: string;
  @Input() avatar: string = 'unnamed.png';
}
