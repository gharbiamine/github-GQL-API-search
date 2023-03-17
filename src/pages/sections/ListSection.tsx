import React, { FC, useContext, useMemo, useState } from "react";
import { List } from "../../components/List";
import { Search } from "../../components/Search";
import { UserContext } from "../../contexts/UserContext";
import { RepositoryNodeModel } from "../../models/RepositoryNodeModel";
import { MoonLoader } from "react-spinners";

export const ListSection: FC = () => {
  const COLOR = "#0e1c36";
  const { currentUser } = useContext(UserContext);
  const [repositoryList, SetRepositoryList] = useState<RepositoryNodeModel[]>(
    []
  );
  const list = useMemo(() => {
    SetRepositoryList(currentUser?.repositories.nodes as RepositoryNodeModel[]);
  }, [currentUser]);

  if (!currentUser) return <div></div>;
  else {
    return (
      <div className="listSection">
        <div className="flex items-center justify-center">
          <MoonLoader loading={false} color={COLOR} />
        </div>
        <Search
          handleSearch={() => {}}
          title="filter through repositories"
          button="fetch"
          isMain={false}
        />

        <List repositoryList={repositoryList} />
      </div>
    );
  }
};
