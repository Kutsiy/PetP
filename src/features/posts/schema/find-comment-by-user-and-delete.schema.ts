import { gql } from 'apollo-angular';

export const FIND_COMMENT_BY_USER_AND_DELETE = gql`
  mutation FindCommentByUserAndDelete($id: String!, $commentId: String!) {
    FindCommentByUserAndDelete(id: $id, commentId: $commentId) {
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
