import { gql } from 'apollo-angular';

export const GET_POSTS = gql`
  query GetPosts($searchString: String, $page: Int, $take: Int) {
    Posts(searchString: $searchString, page: $page, take: $take) {
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
      }
      totalCount
      pageCount
      currentPage
      isEmpty
    }
  }
`;
