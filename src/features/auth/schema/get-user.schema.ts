import { gql } from 'apollo-angular';

export const GETUSER = gql`
  mutation GetUser {
    GetUser {
      id
      email
      isActivated
      avatarLink
    }
  }
`;
