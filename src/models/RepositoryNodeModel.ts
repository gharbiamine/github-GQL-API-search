export interface RepositoryNodeModel {
  name: string;
  description: string;
  stargazers: {
    totalCount: number;
  };
  forks: {
    totalCount: number;
  };
  updatedAt: string;
  url: string;
}
