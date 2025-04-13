import { Component, OnInit } from '@angular/core';
import { PostsService } from '../../features';

@Component({
  selector: 'app-user-articles',
  standalone: false,

  templateUrl: './user-articles.component.html',
  styleUrl: './user-articles.component.scss',
})
export class UserArticlesWidgetComponent implements OnInit {
  constructor(private readonly postService: PostsService) {}

  data: any;
  ngOnInit(): void {
    this.postService.getPostByUser()?.subscribe((result) => {
      this.data = result.posts;
    });
  }

  click(event: string) {
    this.postService.findPostByUserAndDelete(event)?.subscribe((result) => {
      if (result.posts) {
        this.data = result.posts;
      } else {
        this.data = [];
      }
    });
  }
}
