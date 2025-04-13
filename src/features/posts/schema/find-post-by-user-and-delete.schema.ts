import { gql } from 'apollo-angular';

export const FIND_POST_BY_USER_AND_DELETE = gql`
  mutation FindPostByUserAndDelete($id: String!) {
    FindPostByUserAndDelete(id: $id) {
      posts {
        id
        imageUrl
        title
        body
        description
        category
        authorName
        likes
        dislikes
        views
        createdAt
        commentCount
      }
    }
  }
`;
