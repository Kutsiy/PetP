import { Component, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-articleswrapper',
  templateUrl: './articleswrapper.component.html',
  styleUrl: './articleswrapper.component.scss',
})
export class ArticleswrapperComponent {
  searchString: string | null = null;
}
