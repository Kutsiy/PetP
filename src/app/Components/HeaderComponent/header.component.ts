import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { Component, ElementRef, Inject, PLATFORM_ID } from '@angular/core';
import { platform } from 'os';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  constructor(
    @Inject(DOCUMENT) private document: Document,
    @Inject(PLATFORM_ID) private platformId: Object,
    private elementRef: ElementRef
  ) {}
  themeToggle() {
    if (isPlatformBrowser(this.platformId)) {
      this.document.body.dataset['theme'] =
        this.document.body.dataset['theme'] === 'light' ? 'dark' : 'light';
    }
  }

  mobileMenuToggle() {
    this.elementRef.nativeElement
      .querySelector('.header__mobile-menu')
      .classList.toggle('show');
  }
}
