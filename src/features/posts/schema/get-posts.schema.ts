import { gql } from 'apollo-angular';

export const GET_POSTS = gql`
  query GetPosts(
    $searchString: String
    $page: Int
    $take: Int
    $category: String
    $sortFilter: String
  ) {
    Posts(
      searchString: $searchString
      page: $page
      take: $take
      category: $category
      sortFilter: $sortFilter
    ) {
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
      totalCount
      pageCount
      currentPage
      isEmpty
    }
  }
`;
