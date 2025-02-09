import { gql } from 'apollo-angular';

export const LOGIN = gql`
  query Login($name: String!, $email: String!, $password: String!) {
    Login(email: $email, password: $password) {
      refreshToken
      accessToken
    }
  }
`;
