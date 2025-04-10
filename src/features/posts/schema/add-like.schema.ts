import { gql } from 'apollo-angular';

export const ADD_LIKE = gql`
  mutation AddLike($id: String!) {
    AddLike(id: $id) {
      result
      currentLikeCount
      currentDislikeCount
      userSetLike
      userSetDislike
    }
  }
`;
