import { Component, Inject, SimpleChanges } from '@angular/core';
import { PostsService } from '../../features/posts/posts.service';

@Component({
  selector: 'app-articleswrapper',
  templateUrl: './articles.component.html',
  styleUrl: './articles.component.scss',
  standalone: false,
})
export class ArticlesPageComponent {
  searchString: string | null = null;

  constructor(@Inject(PostsService) private postService: PostsService) {
    this.searchString = this.postService.getSearchString();
  }

  message: string = 'vertically';

  handleNotification(message: string) {
    this.message = message;
  }
}
