import { Component, Input, OnInit } from '@angular/core';
import { join } from 'node:path';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrl: './post.component.scss',
})
export class PostComponent {
  @Input() post: any = null;
}
