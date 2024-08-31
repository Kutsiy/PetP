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
    this.loadPosts(this.currentPage, this.pageLimit);
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
    this.searchStringChange.emit('');
    this.loadPosts(pageNumber, this.pageLimit);
    this.onSearch();
    scrollTo({ top: 0 });
  }

  async loadPosts(page = 1, limit = 10) {
    if (isPlatformBrowser(this.platformId)) {
      this.isLoading = true;
      // this.httpClient
      //   .get(
      //     `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=${limit}`,
      //     {
      //       observe: 'response',
      //     }
      //   )
      //   .subscribe(
      //     (response: HttpResponse<any>) => {
      //       this.data = response.body;
      //       this.searchData = [...response.body];
      //       if (!this.totalCount) {
      //         this.totalCount = response.headers.get('x-total-count');
      //         if (this.totalCount && this.pageCountArray.length === 0) {
      //           this.pageCount = Math.ceil(+this.totalCount / this.pageLimit);
      //           for (let i = 0; i < this.pageCount; i++) {
      //             this.pageCountArray.push(i + 1);
      //           }
      //         }
      //       }
      //       this.isLoading = false;
      //     },
      //     (error) => {
      //       console.error(error);
      //     }
      //   );
      this.postService.start()?.subscribe(
        (data) => {
          this.data = data;
          this.searchData = [...data];
          this.isLoading = false;
        },
        (error) => {
          console.error(error);
        }
      );
    }
  }
}
