import { gql } from 'apollo-angular';

export const ADD_VIEW = gql`
  mutation AddView($id: String!) {
    AddView(id: $id) {
      result
      userExists
      currentViewsCount
    }
  }
`;
