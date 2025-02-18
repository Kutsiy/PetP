import { HttpErrorResponse } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import {
  ApolloLink,
  FetchResult,
  NextLink,
  Operation,
} from '@apollo/client/core';
import { onError } from '@apollo/client/link/error';
import { AuthService } from '../../../features';
import { catchError, Observable, switchMap } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class AuthInterceptor {
  private isRefreshing = false;
  private refreshTokenQueue: (() => void)[] = [];

  constructor(private readonly injector: Injector) {}

  create(): ApolloLink {
    return onError(({ operation, forward, networkError }): any => {
      if (
        networkError instanceof HttpErrorResponse &&
        networkError.status === 401
      ) {
        return this.handleRefreshToken(operation, forward);
      }
    });
  }

  private handleRefreshToken(
    operation: Operation,
    forward: NextLink
  ): Observable<FetchResult> {
    const authService = this.injector.get(AuthService);
    if (!this.isRefreshing) {
      this.isRefreshing = true;

      return new Observable<FetchResult>((observer) => {
        authService
          .refresh()
          ?.pipe(
            switchMap(() => {
              this.isRefreshing = false;
              this.refreshTokenQueue.forEach((callback) => callback());
              this.refreshTokenQueue = [];
              return forward(operation);
            }),
            catchError((error) => {
              this.isRefreshing = false;
              this.refreshTokenQueue = [];
              observer.error(error);
              return new Observable();
            })
          )
          .subscribe({
            next: (result: any) => observer.next(result),
            error: (err: any) => observer.error(err),
            complete: () => observer.complete(),
          });
      });
    } else {
      return new Observable<FetchResult>((observer) => {
        this.refreshTokenQueue.push(() => {
          forward(operation).subscribe({
            next: (result: any) => observer.next(result),
            error: (err: any) => observer.error(err),
            complete: () => observer.complete(),
          });
        });
      });
    }
  }
}
