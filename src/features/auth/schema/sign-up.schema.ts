import { gql } from 'apollo-angular';

export const SIGN_UP = gql`
  query SignUp($name: String!, $email: String!, $password: String!) {
    SignUp(name: $name, email: $email, password: $password) {
      tokens {
        accessToken
        refreshToken
      }
      user {
        id
        email
      }
    }
  }
`;
