import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
  standalone: false,
})
export class FooterWidgetComponent {
  scrollUp() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
