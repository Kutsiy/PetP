import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import {
  Component,
  ElementRef,
  Inject,
  OnInit,
  PLATFORM_ID,
} from '@angular/core';
import { GsapService } from '../../Services/gsapService/gsap.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  providers: [GsapService],
})
export class HeaderComponent implements OnInit {
  isMenuClose = true;
  isHeaderWatched = false;
  position = 0;
  headerElement: HTMLElement;
  themeModeForSite: string | null = null;
  isMobileAccountMenuOpen = false;
  isHaveAccount = false;
  constructor(
    @Inject(DOCUMENT) private document: Document,
    @Inject(PLATFORM_ID) private platformId: Object,
    private elementRef: ElementRef,
    @Inject(GsapService) private gsapService: GsapService
  ) {
    this.headerElement = this.elementRef.nativeElement.querySelector('.header');
    if (isPlatformBrowser(this.platformId)) {
      this.gsapService.to('.header', {
        y: 0,
        duration: 0.2,
      });
    }
  }

  themeToggle() {
    if (isPlatformBrowser(this.platformId)) {
      this.document.body.dataset['theme'] =
        this.document.body.dataset['theme'] === 'light' ? 'dark' : 'light';
      this.themeModeForSite = this.document.body.dataset['theme'];
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
      this.themeModeForSite = localStorage.getItem('theme');
      if (this.themeModeForSite) {
        this.document.body.dataset['theme'] = this.themeModeForSite;
      }
      this.document.addEventListener('scroll', () => {
        if (window.scrollY <= 50) {
          this.headerElement.style.position = 'relative';
          this.headerElement.classList.remove('hide-header');
          this.headerElement.classList.remove('show-header');
        } else {
          if (this.position < window.scrollY) {
            this.headerElement.classList.remove('show-header');
            this.headerElement.classList.add('hide-header');
            this.position = window.scrollY;
          } else {
            this.headerElement.style.position = 'fixed';
            this.headerElement.classList.add('show-header');
            this.headerElement.classList.remove('hide-header');
            this.position = window.scrollY;
          }
        }
      });
    }
  }

  openMobileAccountMenu() {
    this.isMobileAccountMenuOpen = !this.isMobileAccountMenuOpen;
    const mobileAccountMenu: HTMLDivElement =
      this.elementRef.nativeElement.querySelector(
        '.mobile_account_button__menu'
      );
    mobileAccountMenu.classList.toggle('active');
  }

  // log(event: any) {
  //   event.stopPropagation();
  //   console.log(event.target.textContent);
  // }
}
