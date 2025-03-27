import { APOLLO_OPTIONS, ApolloModule } from 'apollo-angular';
import { HttpLink } from 'apollo-angular/http';
import { Injector, NgModule } from '@angular/core';
import {
  ApolloClientOptions,
  ApolloLink,
  InMemoryCache,
} from '@apollo/client/core';
import { AuthInterceptor } from '../shared/interceptors';
import extractFiles from 'extract-files/extractFiles.mjs';
import isExtractableFile from 'extract-files/isExtractableFile.mjs';
import { HttpHeaders } from '@angular/common/http';

const headers = new HttpHeaders({
  'x-apollo-operation-name': 'uploadAvatar',
});

const uri = 'http://localhost:3000/graphql'; // <-- add the URL of the GraphQL server here
export function createApollo(
  httpLink: HttpLink,
  injector: Injector
): ApolloClientOptions<any> {
  const authInterceptor = injector.get(AuthInterceptor, null);
  return {
    link: ApolloLink.from([
      authInterceptor ? authInterceptor.create() : ApolloLink.empty(),
      httpLink.create({
        uri,
        withCredentials: true,
        extractFiles: (body) => extractFiles(body, isExtractableFile),
        headers: headers,
      }),
    ]),
    cache: new InMemoryCache(),
    credentials: 'include',
  };
}

@NgModule({
  exports: [ApolloModule],
  providers: [
    AuthInterceptor,
    {
      provide: APOLLO_OPTIONS,
      useFactory: createApollo,
      deps: [HttpLink, Injector],
    },
  ],
})
export class GraphQLModule {}
