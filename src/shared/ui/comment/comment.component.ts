import { Component, Input, OnInit } from '@angular/core';

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
}
