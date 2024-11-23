import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostsService } from '../../../../../Services/posts.service';

type PostData = {
  __typename: string;
  id: string;
  title: string;
  body: string;
};
@Component({
  selector: 'app-post-page',
  templateUrl: './post-page.component.html',
  styleUrl: './post-page.component.scss',
})
export class PostPageComponent implements OnInit {
  postId: string | null = null;
  data: PostData | null = null;

  constructor(
    private route: ActivatedRoute,
    @Inject(PostsService) private postService: PostsService
  ) {}

  ngOnInit(): void {
    console.log(this.postService.getPage());
    this.route.paramMap.subscribe((params) => {
      this.postId = params.get('id');
    });
    const result = this.postService.findPost(`${this.postId}`);
    if (result !== null) {
      result.subscribe((result) => {
        this.data = { ...result };
        console.log(this.data);
      });
    }
  }
}
