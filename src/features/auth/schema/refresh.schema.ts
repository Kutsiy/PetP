import { gql } from 'apollo-angular';

export const REFRESH = gql`
  mutation Refresh {
    Refresh {
      user {
        id
        email
        isActivated
      }
    }
  }
`;
