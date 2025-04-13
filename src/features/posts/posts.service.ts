import { isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID, signal } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { map, Subscription } from 'rxjs';
import {
  ADD_COMMENT,
  ADD_DISLIKE,
  ADD_LIKE,
  ADD_VIEW,
  CREATE_POST,
  FIND_COMMENT_BY_USER_AND_DELETE,
  FIND_POST_BY_USER_AND_DELETE,
  GET_POPULAR_POST,
  GET_POST,
  GET_POST_BY_USER,
  GET_POSTS,
} from './schema';

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

  start(
    searchString: string = '',
    page: number,
    take: number,
    category: string,
    sortFilter: string
  ) {
    if (isPlatformBrowser(this.platformId)) {
      return this.apollo
        .watchQuery<any>({
          query: GET_POSTS,
          variables: {
            searchString,
            page,
            take,
            category,
            sortFilter,
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

  addView(id: string) {
    if (isPlatformBrowser(this.platformId)) {
      return this.apollo
        .mutate<any>({
          mutation: ADD_VIEW,
          variables: { id },
          context: {
            fetchOptions: {
              credentials: 'include',
            },
          },
        })
        .pipe(map((data: any) => data.data.AddView));
    }
    return null;
  }

  addRate(id: string, type: 'like' | 'dislike') {
    const mutation = type === 'like' ? ADD_LIKE : ADD_DISLIKE;
    if (isPlatformBrowser(this.platformId)) {
      return this.apollo
        .mutate<any>({
          mutation: mutation,
          variables: { id },
          context: {
            fetchOptions: {
              credentials: 'include',
            },
          },
        })
        .pipe(
          map((data: any) =>
            type === 'like' ? data.data.AddLike : data.data.AddDislike
          )
        );
    }
    return null;
  }

  addComment(id: string, text: string) {
    if (isPlatformBrowser(this.platformId)) {
      return this.apollo
        .mutate<any>({
          mutation: ADD_COMMENT,
          variables: { id, text },
          context: {
            fetchOptions: {
              credentials: 'include',
            },
          },
        })
        .pipe(map((data: any) => data.data.AddComment));
    }
    return null;
  }

  getPostByUser() {
    if (isPlatformBrowser(this.platformId)) {
      return this.apollo
        .watchQuery<any>({
          query: GET_POST_BY_USER,
          fetchPolicy: 'no-cache',
          context: {
            fetchOptions: {
              credentials: 'include',
            },
          },
        })
        .valueChanges.pipe(map((data) => data.data.PostByUser));
    }
    return null;
  }

  findPostByUserAndDelete(id: string) {
    if (isPlatformBrowser(this.platformId)) {
      return this.apollo
        .mutate<any>({
          mutation: FIND_POST_BY_USER_AND_DELETE,
          variables: { id },
          context: {
            fetchOptions: {
              credentials: 'include',
            },
          },
        })
        .pipe(map((data: any) => data.data.FindPostByUserAndDelete));
    }
    return null;
  }

  findCommentByUserAndDelete(id: string, commentId: string) {
    if (isPlatformBrowser(this.platformId)) {
      return this.apollo
        .mutate<any>({
          mutation: FIND_COMMENT_BY_USER_AND_DELETE,
          variables: { id, commentId },
          context: {
            fetchOptions: {
              credentials: 'include',
            },
          },
        })
        .pipe(map((data: any) => data.data.FindCommentByUserAndDelete));
    }
    return null;
  }

  getPopularPost() {
    if (isPlatformBrowser(this.platformId)) {
      return this.apollo
        .watchQuery<any>({
          query: GET_POPULAR_POST,
          fetchPolicy: 'no-cache',
          context: {
            fetchOptions: {
              credentials: 'include',
            },
          },
        })
        .valueChanges.pipe(map((data) => data.data.GetPopularPost));
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
