import React, { FC, useContext, useMemo, useState } from "react";

import { UserContext } from "../contexts/UserContext";
import { RepositoryNodeModel } from "../models/RepositoryNodeModel";
import { Card } from "./Card";

interface IListProps {
  repositoryList: RepositoryNodeModel[] | null;
}

export const List: FC<IListProps> = ({ repositoryList }) => {
  const { currentUser } = useContext(UserContext);

  return (
    <div className="grid grid-flow-row gap-8 text-neutral-600 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 m-5">
      {repositoryList?.map((node: RepositoryNodeModel, index: number) => {
        return <Card repository={node} key={index} />;
      })}
    </div>
  );
};
