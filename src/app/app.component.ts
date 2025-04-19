import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { routeAnimation } from './route-animation';
import { Store } from '@ngrx/store';
import * as AuthActions from './../shared/store/auth/auth.actions';
import * as AuthSelectors from './../shared/store/auth/auth.selectors';
import { take } from 'rxjs';
import { AuthServiceStore } from '../shared/services/auth.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  animations: [routeAnimation],
  standalone: false,
})
export class AppComponent implements OnInit {
  constructor(
    private readonly store: Store,
    private readonly authServiceStore: AuthServiceStore
  ) {}

  showActivatePopUp: any;
  userAuth: any;
  isAnimating = false;
  nameOfPage = null;
  prepareRoute(outlet: RouterOutlet) {
    this.nameOfPage = outlet.activatedRouteData['animation'];
    return outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
  onStartAnimation() {
    this.isAnimating = true;
  }

  onDoneAnimation() {
    this.isAnimating = false;
  }

  ngOnInit(): void {
    this.showActivatePopUp = this.authServiceStore.getPopUp();
    this.userAuth = this.authServiceStore.getAuth();
  }
}
