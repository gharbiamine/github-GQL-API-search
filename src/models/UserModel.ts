import { RepositoryNodeModel } from "./RepositoryNodeModel";

export interface UserModel {
  email: string;
  avatarUrl: string;
  bio: string;
  repositories: {
    nodes: RepositoryNodeModel[];
  };
}
