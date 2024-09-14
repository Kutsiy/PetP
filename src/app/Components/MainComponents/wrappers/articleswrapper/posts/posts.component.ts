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

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.scss',
})
export class PostsComponent implements OnInit, OnChanges {
  data: any[] | null = null;
  searchData: any[] | null = null;
  totalCount: string | null = null;
  currentPage = 1;
  pageLimit = 10;
  pageCount: number | null = null;
  pageCountArray: number[] = [];
  isLoading: boolean = false;
  @Input() searchString: string | null = null;
  @Output() searchStringChange = new EventEmitter<string | null>();
  constructor(
    @Inject(HttpClient) private httpClient: HttpClient,
    @Inject(PLATFORM_ID) private platformId: Object,
    @Inject(PostsService) private postService: PostsService
  ) {}
  ngOnInit(): void {
    this.loadPosts(this.postService.getPage(), this.pageLimit);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['searchString']) {
      const value = changes['searchString'].currentValue;
      this.onSearch(value ?? '');
    }
  }

  onSearch(value: string = '') {
    if (!this.data) return;
    if (value === '') {
      this.searchData = [...this.data];
    } else {
      this.searchData = this.data.filter((val: any) =>
        val.title.toLowerCase().includes(value.toLowerCase())
      );
    }
  }

  clickOnPageNumber(pageNumber: number) {
    this.postService.setPage(pageNumber);
    this.searchStringChange.emit('');
    this.loadPosts(pageNumber, this.pageLimit);
    this.onSearch();
    scrollTo({ top: 0 });
  }

  async loadPosts(pageNumber: number = 1, limit: number = 10) {
    if (isPlatformBrowser(this.platformId)) {
      this.isLoading = true;

      this.postService.start(pageNumber, limit)?.subscribe(
        (data) => {
          if (data) {
            this.data = data.posts;
            this.searchData = [...data.posts];
            this.totalCount = data.totalCount;
            this.pageCount = data.pageCount;
            if (this.pageCount) {
              this.pageCountArray = Array.from(
                { length: this.pageCount },
                (_, i) => i + 1
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
}
