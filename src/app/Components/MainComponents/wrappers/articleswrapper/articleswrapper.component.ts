import { Component, Inject, SimpleChanges } from '@angular/core';
import { PostsService } from '../../../../Services/postService/posts.service';

@Component({
  selector: 'app-articleswrapper',
  templateUrl: './articleswrapper.component.html',
  styleUrl: './articleswrapper.component.scss',
})
export class ArticleswrapperComponent {
  searchString: string | null = null;

  constructor(@Inject(PostsService) private postService: PostsService) {
    this.searchString = this.postService.getSearchString();
  }

  message: string = 'vertically';

  handleNotification(message: string) {
    this.message = message;
  }
}
