/**

    Represents a GraphQL query to retrieve a user's repositories with additional information such as stargazers, forks, and primary language.
    @typedef {string} getRepositoriesQuery
    @property {number} $limit - The maximum number of repositories to retrieve.
    @property {string} $username - The GitHub username of the user whose repositories to retrieve.
    @returns {string} - The GraphQL query to retrieve user's repositories.
    */
export const getRepositoriesQuery: string = `
query getRepositoriesQuery($limit: Int!, $username: String!) {
  user(login: $username) {
    login
    email
    avatarUrl
    bio
    url
    following{
        totalCount
    }
    followers{
        totalCount
    }
    repositories(
      first: $limit
      orderBy: { field: UPDATED_AT, direction: DESC }
    ) {
      nodes {
        ... on Repository {
          name
          description
          url
          stargazers {
            totalCount
          }
          forks {
            totalCount
          }
          primaryLanguage{
            name
          }
          updatedAt
        }
      }
    }
  }
}`;
