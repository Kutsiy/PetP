import { Component, EventEmitter, Inject, Output } from '@angular/core';
import { PostsService } from '../../features';

@Component({
  selector: 'app-search',
  standalone: false,

  templateUrl: './search.component.html',
  styleUrl: './search.component.scss',
})
export class SearchWidgetComponent {
  searchString: string | undefined = undefined;
  @Output() search = new EventEmitter<string>();

  constructor(@Inject(PostsService) private postService: PostsService) {
    this.searchString = this.postService.getSearchString();
  }
}
