import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { routeAnimation } from './route-animation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  animations: [routeAnimation],
})
export class AppComponent {
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
}
