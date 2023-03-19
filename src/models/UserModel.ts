import { RepositoryNodeModel } from "./RepositoryNodeModel";

export interface UserModel {
  login: string;
  email: string;
  avatarUrl: string;
  bio: string;
  url: string;
  following: {
    totalCount: number;
  };
  followers: {
    totalCount: number;
  };
  repositories: {
    nodes: RepositoryNodeModel[];
  };
}
