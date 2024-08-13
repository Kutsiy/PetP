import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.scss',
})
export class PostsComponent implements OnInit {
  data: any = null;
  constructor(@Inject(HttpClient) private httpClient: HttpClient) {}
  ngOnInit(): void {
    this.httpClient
      .get('https://jsonplaceholder.typicode.com/posts')
      .subscribe((data) => {
        this.data = data;
      });
  }
}
