import { isPlatformBrowser } from '@angular/common';
import {
  Component,
  EventEmitter,
  Inject,
  Input,
  OnChanges,
  OnInit,
  Output,
  PLATFORM_ID,
  SimpleChanges,
} from '@angular/core';
import { GsapService } from '../../shared/animations/gsap.service';
import { PostsService } from '../../features';
import { Store } from '@ngrx/store';
import * as PostsActions from './../../shared/store/posts/posts.actions';
import { ActivatedRoute, Router } from '@angular/router';

type range = {
  firstPage: boolean;
  leftDots: boolean;
  rangeWithDots: (string | number)[] | null;
  rightDots: boolean;
  lastPage: boolean;
  left: number;
  right: number;
};

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.scss',
  standalone: false,
})
export class PostsWidgetComponent implements OnInit, OnChanges {
  data: any[] | null = null;
  totalCount: string | null = null;
  currentPage = 1;
  pageLimit = 10;
  pageCount: number = 1;
  pageCountArray: number[] = [];
  isLoading: boolean = false;
  isEmpty: boolean = false;
  rangePage: range | null = null;
  leftNumber: number = 0;
  rightNumber: number = 0;
  @Input() searchString: string | null = null;
  @Input() filterDisplay: 'Horizontally' | 'Vertically' = 'Vertically';
  @Output() searchStringChange = new EventEmitter<string | null>();
  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    @Inject(PostsService) private postService: PostsService,
    private readonly store: Store,
    private readonly router: Router,
    private readonly activateRoute: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.currentPage = this.postService.getPage();
    this.loadPosts(
      this.postService.getSearchString(),
      this.currentPage,
      this.pageLimit
    );
    const querySub = this.activateRoute.queryParamMap.subscribe((params) => {
      const page = params.get('page');
      if (page) {
        this.clickOnPageNumber(+page);
      }
    });
    querySub.unsubscribe();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['searchString']) {
      const value = changes['searchString'].currentValue ?? '';
      this.onSearch(value);
    }
  }

  onSearch(value: string = '') {
    if (!this.data) return;
    this.postService.setPage(1);
    this.currentPage = this.postService.getPage();
    if (value === '' || value === undefined || value === null) {
      this.postService.setSearchString('');
      this.loadPosts('');
    } else {
      this.postService.setSearchString(value);
      this.loadPosts(value);
    }
  }

  clickOnPageNumber(pageNumber: number | string) {
    if (typeof pageNumber === 'number') {
      this.postService.setPage(pageNumber);
      this.currentPage = this.postService.getPage();
      this.searchStringChange.emit(this.postService.getSearchString());
      this.loadPosts(
        this.postService.getSearchString(),
        pageNumber,
        this.pageLimit
      );
    }
    scrollTo({ top: 0 });
  }

  async loadPosts(value = '', pageNumber: number = 1, limit: number = 10) {
    if (isPlatformBrowser(this.platformId)) {
      this.isLoading = true;
      this.store.dispatch(PostsActions.postsSetLoading({ value: true }));

      await this.postService.start(value, pageNumber, limit)?.subscribe(
        (data: any) => {
          if (data) {
            this.data = data.posts;
            this.totalCount = data.totalCount;
            this.pageCount = data.pageCount;
            this.isEmpty = data.isEmpty;
            if (this.pageCount) {
              this.pageCountArray = Array.from(
                { length: this.pageCount },
                (_, i) => i + 1
              );
              this.rangePage = this.setPaginationButtons(
                this.pageCount,
                pageNumber
              );
              if (this.rangePage !== null) {
                this.leftNumber = this.rangePage.left;
                this.rightNumber = this.rangePage.right;
              }
            }
          }
          this.isLoading = false;
          this.store.dispatch(PostsActions.postsSetLoading({ value: false }));
        },
        (error) => {
          console.log(error);
        }
      );
    }
  }

  setPaginationButtons(pageCount: number | null, currentPage: number) {
    const total = pageCount;
    const current = currentPage;
    this.router.navigate([], {
      relativeTo: this.activateRoute,
      queryParams: {
        page: currentPage,
      },
      queryParamsHandling: 'merge',
    });
    const delta = currentPage === 1 ? 2 : currentPage === pageCount ? 2 : 1;
    if (
      typeof currentPage === 'number' &&
      typeof pageCount === 'number' &&
      typeof total === 'number'
    ) {
      let left = Math.max(1, current - delta);
      let right = Math.min(
        currentPage >= pageCount - 1 ? pageCount : total - 1,
        current + delta
      );
      if (total === 3) {
        right = 3;
      }
      const range: range = {
        firstPage: false,
        leftDots: false,
        rangeWithDots: null,
        rightDots: false,
        lastPage: false,
        left,
        right,
      };
      if (total) {
        const rangeWithDots: (number | string)[] = [];
        if (left > 1) {
          range.firstPage = true;
          range.leftDots = true;
        }
        for (let i = left; i <= right; i++) {
          rangeWithDots.push(i);
        }
        if (right < total) {
          range.lastPage = true;
          range.rightDots = true;
        }
        range.rangeWithDots = rangeWithDots;
      }
      return range;
    }
    return null;
  }
}
