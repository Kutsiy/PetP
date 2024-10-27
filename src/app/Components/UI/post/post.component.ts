import { Component, Input, OnInit } from '@angular/core';
import { join } from 'node:path';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrl: './post.component.scss',
})
export class PostComponent implements OnInit {
  @Input() post: any = null;
  body = '';
  ngOnInit() {
    const splitBody = this.post.body.split('');
    if (splitBody.length > 70) {
      let body = splitBody.slice(0, 70);
      if (body[body.length - 1] === ' ') {
        delete body[body.length - 1];
      }
      body.push('...');
      this.body = body.join('');
    } else {
      this.body = this.post.body;
    }
  }
}
