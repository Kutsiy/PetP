import { Injectable } from '@angular/core';
import { ApolloLink } from '@apollo/client/core';
import { onError } from '@apollo/client/link/error';
@Injectable({
  providedIn: 'root',
})
export class AuthInterceptor {
  create(): ApolloLink {
    return onError(({ operation, networkError }) => {
      let isRetry;
      console.log(isRetry);
      console.log(operation.query.loc?.source.body, 'operation');
      console.log(networkError, 'networkError');
      isRetry = true;
    });
  }
}
