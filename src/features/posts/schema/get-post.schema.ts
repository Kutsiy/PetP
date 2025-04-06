import { gql } from 'apollo-angular';

export const GET_POST = gql`
  query GetPost($id: String) {
    Post(id: $id) {
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
    }
  }
`;
