import { Injectable } from '@angular/core';
import gsap from 'gsap';

@Injectable({
  providedIn: 'root',
})
export class GsapService {
  constructor() {}

  to(
    element: string | Element | Element[],
    options: gsap.TweenVars
  ): gsap.core.Tween {
    return gsap.to(element, options);
  }

  from(
    element: string | Element | Element[],
    options: gsap.TweenVars
  ): gsap.core.Tween {
    return gsap.from(element, options);
  }
  fromTo(
    element: string | Element | Element[],
    fromVars: gsap.TweenVars,
    toVars: gsap.TweenVars
  ): gsap.core.Tween {
    return gsap.fromTo(element, fromVars, toVars);
  }
}
