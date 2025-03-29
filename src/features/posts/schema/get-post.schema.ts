import { gql } from 'apollo-angular';

export const GET_POST = gql`
  query GetPost($id: String) {
    Post(id: $id) {
      id
      title
      body
    }
  }
`;
