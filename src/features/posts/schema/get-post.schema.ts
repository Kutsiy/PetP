import { gql } from 'apollo-angular';

export const GET_POST = gql`
  query GetPost($id: String) {
    Post(id: $id) {
      post {
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
      comments {
        postIdString
        idString
        authorId {
          name
          avatarLink
          id
        }
        postId
        text
        createdAt
      }
      rate {
        userSetLike
        userSetDislike
      }
    }
  }
`;
