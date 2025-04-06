import { Component, Input, OnInit } from '@angular/core';
import { join } from 'node:path';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrl: './post.component.scss',
  standalone: false,
})
export class PostWidgetComponent implements OnInit {
  ngOnInit(): void {
    this.img = `http://localhost:3000${this.post.imageUrl}`;
  }
  @Input() post: any = null;
  img: string | null = null;
}
