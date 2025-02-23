import { gql } from 'apollo-angular';

export const LOGOUT = gql`
  query LogOut {
    LogOut {
      accessToken
      refreshToken
    }
  }
`;
