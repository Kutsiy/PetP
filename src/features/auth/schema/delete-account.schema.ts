import { gql } from 'apollo-angular';

export const DELETE_ACCOUNT = gql`
  query DeleteAccount {
    DeleteAccount {
      result
    }
  }
`;
