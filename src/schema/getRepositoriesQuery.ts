export const getRepositoriesQuery: string = `
query getRepositoriesQuery($limit: Int!, $username: String!) {
  user(login: $username) {
    email
    avatarUrl
    bio
    repositories(
      first: $limit
      orderBy: { field: UPDATED_AT, direction: DESC }
    ) {
      nodes {
        ... on Repository {
          name
          description
          stargazers {
            totalCount
          }
          forks {
            totalCount
          }
          updatedAt
        }
      }
    }
  }
}`;
