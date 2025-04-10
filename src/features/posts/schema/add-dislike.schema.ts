import { gql } from 'apollo-angular';

export const ADD_DISLIKE = gql`
  mutation AddDislike($id: String!) {
    AddDislike(id: $id) {
      result
      currentLikeCount
      currentDislikeCount
      userSetLike
      userSetDislike
    }
  }
`;
