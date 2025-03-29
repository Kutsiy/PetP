import { gql } from 'apollo-angular';

export const GET_POSTS = gql`
  query GetPosts($searchString: String, $page: Int, $take: Int) {
    Posts(searchString: $searchString, page: $page, take: $take) {
      posts {
        id
        title
        body
      }
      totalCount
      pageCount
      currentPage
      isEmpty
    }
  }
`;
