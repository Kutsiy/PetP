import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { Subscription } from 'rxjs';

const GET_POSTS = gql`
  query GetPosts {
    posts {
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
  loading: boolean = false;
  posts: any;

  private querySubscription: Subscription | undefined = undefined;

  constructor(private readonly apollo: Apollo) {}

  start() {
    this.querySubscription = this.apollo
      .watchQuery<any>({
        query: GET_POSTS,
      })
      .valueChanges.subscribe(({ data, loading }) => {
        this.loading = loading;
        this.posts = data.posts;
      });
  }
  stop() {
    this.querySubscription?.unsubscribe();
  }
}
