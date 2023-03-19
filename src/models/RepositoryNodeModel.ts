export interface RepositoryNodeModel {
  name: string;
  description: string;
  stargazers: {
    totalCount: number;
  };
  forks: {
    totalCount: number;
  };
  primaryLanguage: {
    name: string;
  };
  updatedAt: string;
  url: string;
}
