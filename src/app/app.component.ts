import { Component } from '@angular/core';
import { PostsService } from './Services/posts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  constructor(private postsService: PostsService) {
    this.postsService.start();
  }
}
