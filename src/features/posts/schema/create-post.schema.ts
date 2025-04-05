import { gql } from 'apollo-angular';

export const CREATE_POST = gql`
  mutation AddPost(
    $file: Upload!
    $title: String!
    $body: String!
    $category: String!
    $description: String!
  ) {
    AddPost(
      file: $file
      title: $title
      body: $body
      category: $category
      description: $description
    ) {
      result
    }
  }
`;
