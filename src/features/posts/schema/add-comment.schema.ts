import { gql } from 'apollo-angular';

export const ADD_COMMENT = gql`
  mutation AddComment($id: String!, $text: String!) {
    AddComment(id: $id, text: $text) {
      comments {
        postIdString
        idString
        authorId {
          name
          avatarLink
          id
        }
        text
        createdAt
      }
    }
  }
`;
