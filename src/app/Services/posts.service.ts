import { isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID, signal } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { map, Subscription } from 'rxjs';

const GET_POSTS = gql`
  query GetPosts($searchString: String, $page: Int, $take: Int) {
    Posts(searchString: $searchString, page: $page, take: $take) {
      posts {
        id
        title
        body
      }
      totalCount
      pageCount
      currentPage
      isEmpty
    }
  }
`;

const GET_POST = gql`
  query GetPost($id: String) {
    Post(id: $id) {
      id
      title
      body
    }
  }
`;

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  private pageOnSite = signal(1);
  private searchString = signal('');
  constructor(
    private readonly apollo: Apollo,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  start(searchString: string = '', page: number, take: number) {
    if (isPlatformBrowser(this.platformId)) {
      return this.apollo
        .watchQuery<any>({
          query: GET_POSTS,
          variables: {
            searchString,
            page,
            take,
          },
        })
        .valueChanges.pipe(map((data) => data.data.Posts));
    }
    return null;
  }

  findPost(id: string = '1') {
    if (isPlatformBrowser(this.platformId)) {
      return this.apollo
        .watchQuery<any>({
          query: GET_POST,
          variables: {
            id,
          },
        })
        .valueChanges.pipe(map((data) => data.data.Post));
    }
    return null;
  }

  getPage() {
    return this.pageOnSite();
  }

  setPage(page: number) {
    this.pageOnSite.set(page);
  }
  setSearchString(searchString: string) {
    this.searchString.set(searchString);
  }
  getSearchString() {
    return this.searchString();
  }
}
