import { gql } from 'apollo-angular';

export const GET_POST_BY_USER = gql`
  query PostByUser {
    PostByUser {
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
