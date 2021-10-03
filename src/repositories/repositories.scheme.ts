import { gql } from '@apollo/client';

export const GET_REPOSITORIES = gql`
  query Repositories($searchTerm: String!, $pageLimit: Int!) {
    search(query: $searchTerm, first: $pageLimit, type: REPOSITORY) {
      nodes {
        ... on Repository {
          stargazerCount
          forkCount
          url
          name
          id
        }
      }
      pageInfo {
        endCursor
        hasNextPage
        hasPreviousPage
        startCursor
      }
      repositoryCount
    }
  }
`;
