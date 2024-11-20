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
    this.nameOfPage = outlet.activatedRouteData['animation'] ?? null;
    return outlet.activatedRouteData;
  }
  onStartAnimation() {
    this.isAnimating = true;
  }

  onDoneAnimation() {
    this.isAnimating = false;
  }
}
