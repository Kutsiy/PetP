import { gql } from 'apollo-angular';

export const GET_POPULAR_POST = gql`
  query GetPopularPost {
    GetPopularPost {
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
