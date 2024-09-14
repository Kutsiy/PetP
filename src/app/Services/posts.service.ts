import { isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID, signal } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { map, Subscription } from 'rxjs';

const GET_POSTS = gql`
  query GetPosts($page: Int, $take: Int) {
    Posts(page: $page, take: $take) {
      posts {
        id
        title
        body
      }
      totalCount
      pageCount
      currentPage
    }
  }
`;

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  private pageOnSite = signal(1);
  constructor(
    private readonly apollo: Apollo,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  start(page: number, take: number) {
    if (isPlatformBrowser(this.platformId)) {
      return this.apollo
        .watchQuery<any>({
          query: GET_POSTS,
          variables: {
            page,
            take,
          },
        })
        .valueChanges.pipe(map((data) => data.data.Posts));
    }
    return null;
  }

  getPage() {
    return this.pageOnSite();
  }

  setPage(page: number) {
    this.pageOnSite.set(page);
  }
}
