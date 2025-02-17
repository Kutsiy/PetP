import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApolloLink } from '@apollo/client/core';
import { onError } from '@apollo/client/link/error';
@Injectable({
  providedIn: 'root',
})
export class AuthInterceptor {
  constructor() {}
  create(): ApolloLink {
    return onError(({ operation, networkError }) => {
      let isRetry;
      if (networkError instanceof HttpErrorResponse) {
        if (networkError.status === 401) {
        }
      }
    });
  }
}
