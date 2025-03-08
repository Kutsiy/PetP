import { Component } from '@angular/core';

@Component({
  selector: 'app-write-articlewidget',
  standalone: false,

  templateUrl: './write-article.component.html',
  styleUrl: './write-article.component.scss',
})
export class WriteArticleWidgetComponent {
  categories = [
    { value: 'About me', viewValue: 'About me' },
    { value: 'News about programming', viewValue: 'News about programming' },
  ];
}
