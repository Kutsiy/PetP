import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostsService } from '../../features/posts/posts.service';
import { QuillDeltaToHtmlConverter } from 'quill-delta-to-html';

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
  standalone: false,
})
export class PostPageComponent implements OnInit {
  postId: string | null = null;
  data: PostData | null = null;
  quillText: string | null = null;
  editorModules = {
    toolbar: [
      ['bold', 'italic', 'underline', 'strike'],
      ['link', 'video'],
      [{ header: [1, 2, 3, false] }],
      [{ indent: '-1' }, { indent: '+1' }],
      [{ list: 'ordered' }, { list: 'bullet' }],
      [{ align: [] }],
    ],
  };

  constructor(
    private route: ActivatedRoute,
    @Inject(PostsService) private postService: PostsService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.postId = params.get('id');
    });
    const result = this.postService.findPost(`${this.postId}`);
    if (result !== null) {
      result.subscribe((result) => {
        this.data = { ...result };
      });
    }
  }

  onContentChanged(event: any) {
    const delta = event.editor.getContents();
    const converter = new QuillDeltaToHtmlConverter(delta.ops, {});
    this.quillText = converter.convert();
  }
}
