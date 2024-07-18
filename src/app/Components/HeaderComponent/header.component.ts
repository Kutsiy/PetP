import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import {
  Component,
  ElementRef,
  Inject,
  OnInit,
  PLATFORM_ID,
} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {
  isMenuClose = true;

  constructor(
    @Inject(DOCUMENT) private document: Document,
    @Inject(PLATFORM_ID) private platformId: Object,
    private elementRef: ElementRef
  ) {}

  themeToggle() {
    if (isPlatformBrowser(this.platformId)) {
      this.document.body.dataset['theme'] =
        this.document.body.dataset['theme'] === 'light' ? 'dark' : 'light';
      localStorage.setItem('theme', this.document.body.dataset['theme']);
    }
  }

  mobileMenuToggle() {
    if (isPlatformBrowser(this.platformId)) {
      this.elementRef.nativeElement
        .querySelector('.header__mobile-menu')
        .classList.toggle('show');
      this.isMenuClose = this.isMenuClose === true ? false : true;
      this.document.body.style.overflow =
        this.document.body.style.overflow === 'hidden' ? '' : 'hidden';
    }
  }

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      let localTheme = localStorage.getItem('theme');
      if (localTheme) {
        this.document.body.dataset['theme'] = localTheme;
      }
    }
  }
}
