import { isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

@Injectable({
  providedIn: 'root',
})
export class GsapService {
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    if (isPlatformBrowser(this.platformId)) gsap.registerPlugin(ScrollTrigger);
  }

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

  set(element: string | Element | Element[], vars: gsap.TweenVars) {
    return gsap.set(element, vars);
  }

  refreshScrollTrigger() {
    ScrollTrigger.refresh(true);
  }
}
