export interface RepositoryNodeModel {
  name: string;
  description: string;
  stargazers: {
    totalCount: number;
  };
  forks: {
    totalCount: number;
  };
  updatedAt: Date;
}
