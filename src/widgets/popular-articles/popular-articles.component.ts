import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import * as AuthSelectors from './../../shared/store/auth/auth.selectors';

@Component({
  selector: 'app-popular-articles',
  standalone: false,

  templateUrl: './popular-articles.component.html',
  styleUrl: './popular-articles.component.scss',
})
export class PopularArticlesWidgetComponent {
  isAuth: boolean = false;
  constructor(private readonly store: Store) {
    this.store
      .select(AuthSelectors.selectAuthAuthenticated)
      .subscribe((isAuth) => {
        this.isAuth = isAuth;
      });
  }
}
