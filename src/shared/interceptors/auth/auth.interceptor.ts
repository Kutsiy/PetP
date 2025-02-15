import { Injectable } from '@angular/core';
import { ApolloLink, FetchResult, Observable } from '@apollo/client/core';

@Injectable({
  providedIn: 'root',
})
export class AuthInterceptor {
  create(): ApolloLink {
    return new ApolloLink((operation, forward) => {
      if (!forward) {
        return null;
      }
      console.log('LOG');
      return new Observable<FetchResult>((observer) => {
        forward(operation).subscribe({
          next: (response) => {
            response.errors?.forEach((error) => {});
            observer.next(response);
            observer.complete();
          },
          error: (err) => {
            observer.error(err);
          },
        });
      });
    });
  }
}
