import { Component, OnInit } from '@angular/core';
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

  scrollUp() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  ngOnInit() {
    if (document.body.scrollHeight < 1000) {
      this.showScrollUp = false;
    } else {
      this.showScrollUp = true;
    }
  }
}
