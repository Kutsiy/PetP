import { isPlatformBrowser } from '@angular/common';
import { HttpClient, HttpResponse } from '@angular/common/http';
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
import { PostsService } from '../../../../../Services/posts.service';

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
})
export class PostsComponent implements OnInit, OnChanges {
  data: any[] | null = null;
  totalCount: string | null = null;
  currentPage = 1;
  pageLimit = 10;
  pageCount: number | null = null;
  pageCountArray: number[] = [];
  isLoading: boolean = false;
  isEmpty: boolean = false;
  rangePage: range | null = null;
  @Input() searchString: string | null = null;
  @Output() searchStringChange = new EventEmitter<string | null>();
  constructor(
    @Inject(HttpClient) private httpClient: HttpClient,
    @Inject(PLATFORM_ID) private platformId: Object,
    @Inject(PostsService) private postService: PostsService
  ) {}
  ngOnInit(): void {
    this.postService.setSearchString('');
    this.loadPosts('', this.postService.getPage(), this.pageLimit);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['searchString']) {
      const value = changes['searchString'].currentValue;
      this.onSearch(value ?? '');
    }
  }

  onSearch(value: string = '') {
    if (!this.data) return;
    if (value === '' || value === undefined || value === null) {
      this.postService.setSearchString(value);
      this.loadPosts('');
    } else {
      this.postService.setSearchString(value);
      this.loadPosts(value);
    }
  }

  async clickOnPageNumber(event: MouseEvent, pageNumber: number | string) {
    if (typeof pageNumber === 'number') {
      this.currentPage = pageNumber;
      this.postService.setPage(pageNumber);
      this.searchStringChange.emit(this.postService.getSearchString());
      await this.loadPosts(
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
            }
          }
          this.isLoading = false;
        },
        (error) => {
          console.error(error);
        }
      );
    }
  }

  setPaginationButtons(pageCount: number | null, currentPage: number) {
    const total = pageCount;
    const current = currentPage;
    const delta = currentPage === 1 ? 2 : currentPage === pageCount ? 2 : 1;
    let left = Math.max(1, current - delta);
    if (
      typeof currentPage === 'number' &&
      typeof pageCount === 'number' &&
      typeof total === 'number'
    ) {
      let right = Math.min(
        currentPage >= pageCount - 1 ? pageCount : total - 1,
        current + delta
      );
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
