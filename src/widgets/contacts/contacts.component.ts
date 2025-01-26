import { AfterViewInit, Component, Inject, PLATFORM_ID } from '@angular/core';
import { GsapService } from '../../shared/animations/gsap.service';
import { isPlatformBrowser } from '@angular/common';
@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrl: './contacts.component.scss',
  providers: [GsapService],
  standalone: false,
})
export class ContactsWidgetComponent implements AfterViewInit {
  constructor(
    private gsapService: GsapService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.initAnimation();
      setTimeout(() => {
        this.gsapService.refreshScrollTrigger();
      }, 100);
    }
  }

  private initAnimation() {
    this.gsapService.from('.contacts__card-container-L', {
      scrollTrigger: {
        trigger: '.contacts__cards',
        start: 'top bottom',
        // markers: true,
      },
      x: -400,
      ease: 'bounce',
      duration: 2,
      onStart: () => {
        this.gsapService.set('.contacts__card-container-L', {
          css: { pointerEvents: 'none' },
        });
      },
      onComplete: () => {
        this.gsapService.set('.contacts__card-container-L', {
          clearProps: 'all',
        });
        this.gsapService.set('.contacts__card-container-L', {
          css: {
            position: 'relative',
            transition: '0.5s',
          },
        });
      },
    });
    this.gsapService.from('.contacts__card-container-R', {
      scrollTrigger: {
        trigger: '.contacts__cards',
        start: 'top bottom',
        // markers: true,
      },
      x: 400,
      ease: 'bounce',
      duration: 2,
      onStart: () => {
        this.gsapService.set('.contacts__card-container-R', {
          css: { pointerEvents: 'none' },
        });
      },
      onComplete: () => {
        this.gsapService.set('.contacts__card-container-R', {
          clearProps: 'all',
        });
        this.gsapService.set('.contacts__card-container-R', {
          css: {
            position: 'relative',
            transition: '0.5s',
          },
        });
      },
    });
  }
}
