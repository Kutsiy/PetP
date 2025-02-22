import { gql } from 'apollo-angular';

export const LOGIN = gql`
  query Login($email: String!, $password: String!) {
    Login(email: $email, password: $password) {
      tokens {
        accessToken
        refreshToken
      }
      user {
        id
        email
        isActivated
      }
    }
  }
`;
