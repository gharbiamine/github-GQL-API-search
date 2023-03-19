import React, { FC } from "react";
import { RepositoryNodeModel } from "../models/RepositoryNodeModel";
import { Card } from "./Card";

interface IListProps {
  repositoryList: RepositoryNodeModel[] | null;
}

export const List: FC<IListProps> = ({ repositoryList }) => {
  return (
    <div>
      {repositoryList?.map((node: RepositoryNodeModel, index: number) => {
        return <Card repository={node} key={index} />;
      })}
    </div>
  );
};
