import { gql } from 'apollo-angular';

export const ADD_COMMENT = gql`
  mutation AddComment($id: String!, $text: String!) {
    AddComment(id: $id, text: $text) {
      comments {
        authorId {
          name
          avatarLink
        }
        text
        createdAt
      }
    }
  }
`;
