import { Component, Inject } from '@angular/core';
import { PostsService } from '../../features';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrl: './articles.component.scss',
  standalone: false,
})
export class ArticlesPageComponent {
  searchString: string | null = null;

  constructor(@Inject(PostsService) private postService: PostsService) {
    this.searchString = this.postService.getSearchString();
  }

  message: 'Vertically' | 'Horizontally' = 'Vertically';

  handleNotification(message: string) {
    if (message === 'Vertically' || message === 'Horizontally')
      this.message = message;
  }
}
