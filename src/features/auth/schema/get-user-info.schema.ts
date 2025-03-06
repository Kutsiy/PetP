import { gql } from 'apollo-angular';

export const GETUSERINFO = gql`
  query GetAllInfoAboutUser {
    GetAllInfoAboutUser {
      name
      email
      roles
    }
  }
`;
