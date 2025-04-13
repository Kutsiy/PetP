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
import * as AuthSelectors from './../../shared/store/auth/auth.selectors';
import { Store } from '@ngrx/store';

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

  id: string;
};

type Comment = {
  authorId: UserCommentInfo;

  text: string;

  createdAt: number;

  postIdString: string;

  idString: string;
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
  image: any;
  userId: any;

  constructor(
    private route: ActivatedRoute,
    @Inject(PostsService) private postService: PostsService,
    private readonly router: Router,
    private readonly store: Store
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.postId = params.get('id');
    });
    const result = this.postService.findPost(`${this.postId}`);
    if (result !== null) {
      result.subscribe(
        (result) => {
          this.data = { ...result.post };
          const { userSetLike, userSetDislike } = result.rate;
          this.liked = userSetLike;
          this.disliked = userSetDislike;
          this.comments = result.comments;
          console.log(this.comments);
          this.image = `http://localhost:3000${result.post.imageUrl}`;
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
    this.store.select(AuthSelectors.selectUser).subscribe((user) => {
      this.userId = user?.id;
    });
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
    if (this.postId && this.quillText !== null && this.quillText !== '') {
      this.postService
        .addComment(this.postId, this.quillText)
        ?.subscribe((result) => {
          this.comments = result.comments;
          if (this.data) this.data.commentCount = result.comments.length;
        });
    }
  };

  deleteComment(event: string) {
    console.log(event);
    if (this.comments) {
      this.postService
        .findCommentByUserAndDelete(this.comments[0].postIdString, event)
        ?.subscribe((result) => {
          if (result.comments) {
            this.comments = result.comments;
            if (this.data) this.data.commentCount = result.comments.length;
          } else {
            this.comments = [];
            if (this.data) this.data.commentCount = 0;
          }
        });
    }
  }
}
