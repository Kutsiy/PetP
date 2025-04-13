import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-article-card',
  standalone: false,

  templateUrl: './article-card.component.html',
  styleUrl: './article-card.component.scss',
})
export class ArticleCardUiComponent implements OnInit {
  @Input() data!: any;
  image: any;

  ngOnInit(): void {
    this.image = `http://localhost:3000${this.data.imageUrl}`;
  }
}
