import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as AuthSelectors from './../../shared/store/auth/auth.selectors';
import { PostsService } from '../../features';
import { BehaviorSubject, filter, take } from 'rxjs';

@Component({
  selector: 'app-popular-articles',
  standalone: false,

  templateUrl: './popular-articles.component.html',
  styleUrl: './popular-articles.component.scss',
})
export class PopularArticlesWidgetComponent implements OnInit {
  isAuth$ = new BehaviorSubject<boolean>(false);
  firstGroup: any;
  secondGroup: any;
  constructor(
    private readonly store: Store,
    private readonly postService: PostsService
  ) {
    this.postService.getPopularPost()?.subscribe((result) => {
      this.firstGroup = result.posts.slice(0, 2);
      this.secondGroup = result.posts.slice(2, 4);
    });
  }
  ngOnInit(): void {
    this.store
      .select(AuthSelectors.selectAuthState)
      .pipe(
        filter(({ isLoading }) => isLoading === false),
        take(1)
      )
      .subscribe(({ isAuth }) => {
        this.isAuth$.next(isAuth);
      });
  }
}
