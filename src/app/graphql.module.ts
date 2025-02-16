import { APOLLO_OPTIONS, ApolloModule } from 'apollo-angular';
import { HttpLink } from 'apollo-angular/http';
import { NgModule } from '@angular/core';
import {
  ApolloClientOptions,
  ApolloLink,
  InMemoryCache,
} from '@apollo/client/core';
import { AuthInterceptor } from '../shared/interceptors';
import { AuthFeatModule } from '../features/auth/auth.module';

const uri = 'http://localhost:3000/graphql'; // <-- add the URL of the GraphQL server here
export function createApollo(
  httpLink: HttpLink,
  authInterceptor: AuthInterceptor
): ApolloClientOptions<any> {
  return {
    link: ApolloLink.from([
      authInterceptor.create(),
      httpLink.create({ uri, withCredentials: true }),
    ]),
    cache: new InMemoryCache(),
    credentials: 'include',
  };
}

@NgModule({
  exports: [ApolloModule],
  providers: [
    AuthInterceptor,
    AuthFeatModule,
    {
      provide: APOLLO_OPTIONS,
      useFactory: createApollo,
      deps: [HttpLink, AuthInterceptor, AuthFeatModule],
    },
  ],
})
export class GraphQLModule {}
