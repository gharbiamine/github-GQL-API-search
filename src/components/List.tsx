import React, { FC, useContext, useEffect, useMemo, useState } from "react";

import { UserContext } from "../contexts/UserContext";
import { RepositoryNodeModel } from "../models/RepositoryNodeModel";
import { Card } from "./Card";

interface IListProps {
  repositoryList: RepositoryNodeModel[] | null;
}

export const List: FC<IListProps> = ({ repositoryList }) => {
  return (
    <div className="md:px-12 px-4">
      {repositoryList?.map((node: RepositoryNodeModel, index: number) => {
        return <Card repository={node} key={index} />;
      })}
    </div>
  );
};
