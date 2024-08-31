import { isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { map, Subscription } from 'rxjs';

const GET_POSTS = gql`
  query GetPosts {
    Posts {
      posts {
        id
        title
        body
      }
    }
  }
`;

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  loading: boolean = false;
  posts: any;

  constructor(
    private readonly apollo: Apollo,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  start() {
    if (isPlatformBrowser(this.platformId)) {
      return this.apollo
        .watchQuery<any>({
          query: GET_POSTS,
        })
        .valueChanges.pipe(map((data) => data.data.Posts.posts));
    }
    return null;
  }
}
