import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-comment',
  standalone: false,

  templateUrl: './comment.component.html',
  styleUrl: './comment.component.scss',
})
export class CommentUIComponent implements OnInit {
  avatarLink: string | null = null;

  ngOnInit(): void {
    this.avatarLink = `http://localhost:3000${this.avatar}`;
  }
  @Input() name!: string;
  @Input() avatar!: string;
  @Input() text!: string;
  @Input() data!: number;
  @Input() commentAuthorId!: string;
  @Input() userId!: string;
  @Input() commentId!: string;

  @Output() clicked = new EventEmitter<string>();

  onClick() {
    this.clicked.emit(this.commentId);
  }
}
