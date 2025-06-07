import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
  standalone: false,
})
export class FooterWidgetComponent implements OnInit {
  showScrollUp = true;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  scrollUp() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.showScrollUp = document.body.scrollHeight >= 1000;
    }
  }
}
