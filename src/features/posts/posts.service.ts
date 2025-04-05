import { isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID, signal } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { map, Subscription } from 'rxjs';
import { CREATE_POST, GET_POST, GET_POSTS } from './schema';

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
          fetchPolicy: 'no-cache',
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
          fetchPolicy: 'no-cache',
        })
        .valueChanges.pipe(map((data) => data.data.Post));
    }
    return null;
  }

  createPost(
    title: string,
    body: string,
    category: string,
    file: File,
    description: string
  ) {
    if (isPlatformBrowser(this.platformId)) {
      console.log(file);
      return this.apollo
        .mutate<any>({
          mutation: CREATE_POST,
          variables: { file, title, body, category, description },
          context: {
            useMultipart: true,
            fetchOptions: {
              credentials: 'include',
            },
          },
        })
        .pipe(map((data: any) => data.data.AddPost));
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
