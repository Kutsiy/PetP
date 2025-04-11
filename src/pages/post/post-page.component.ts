import {
  Component,
  ElementRef,
  Inject,
  OnInit,
  ViewChild,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PostsService } from '../../features/posts/posts.service';
import { QuillDeltaToHtmlConverter } from 'quill-delta-to-html';
import { AfterViewInit } from '@angular/core';

type PostData = {
  __typename: string;
  id: string;
  imageUrl: string;
  title: string;
  body: string;
  description: string;
  authorId: string;
  authorName: string;
  category: string;
  views: number;
  viewsBy?: string[];
  likes: number;
  dislikes: number;
  likedBy?: string[];
  dislikedBy?: string[];
  comments?: Comment[];
  createdAt: number;
  commentCount: number;
};

type UserCommentInfo = {
  name: string;

  avatarLink: string;
};

type Comment = {
  authorId: UserCommentInfo;

  text: string;

  createdAt: number;
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
  liked: boolean = false;
  disliked: boolean = false;
  comments: Array<Comment> | null = null;

  constructor(
    private route: ActivatedRoute,
    @Inject(PostsService) private postService: PostsService,
    private readonly router: Router
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.postId = params.get('id');
    });
    const result = this.postService.findPost(`${this.postId}`);
    if (result !== null) {
      result.subscribe(
        (result) => {
          console.log(result);
          this.data = { ...result.post };
          const { userSetLike, userSetDislike } = result.rate;
          this.liked = userSetLike;
          this.disliked = userSetDislike;
          this.comments = result.comments;
        },
        () => {
          this.router.navigate(['/articles']);
        }
      );
    }
    if (this.postId) {
      this.postService.addView(this.postId)?.subscribe((result) => {
        if (this.data) {
          this.data.views = result.currentViewsCount;
        }
      });
    }
  }

  onContentChanged(event: any) {
    const delta = event.editor.getContents();
    const converter = new QuillDeltaToHtmlConverter(delta.ops, {});
    this.quillText = converter.convert();
  }

  setLike() {
    if (this.postId) {
      this.postService.addRate(this.postId, 'like')?.subscribe((result) => {
        const {
          currentLikeCount,
          currentDislikeCount,
          userSetLike,
          userSetDislike,
        } = result;
        if (this.data) {
          this.data.likes = currentLikeCount;
          this.data.dislikes = currentDislikeCount;
          this.liked = userSetLike;
          this.disliked = userSetDislike;
        }
      });
    }
  }

  setDislike() {
    if (this.postId) {
      this.postService.addRate(this.postId, 'dislike')?.subscribe((result) => {
        const {
          currentLikeCount,
          currentDislikeCount,
          userSetLike,
          userSetDislike,
        } = result;
        if (this.data) {
          this.data.likes = currentLikeCount;
          this.data.dislikes = currentDislikeCount;
          this.liked = userSetLike;
          this.disliked = userSetDislike;
        }
      });
    }
  }

  writeComment = () => {
    if (this.postId && this.quillText) {
      this.postService
        .addComment(this.postId, this.quillText)
        ?.subscribe((result) => {
          this.comments = result.comments;
          if (this.data) this.data.commentCount = result.comments.length;
        });
    }
  };

  addView() {}
}
