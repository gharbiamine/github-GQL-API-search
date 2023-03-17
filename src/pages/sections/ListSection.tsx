import React, { useContext, useMemo, useState } from "react";
import { List } from "../../components/List";
import { Search } from "../../components/Search";
import { UserContext } from "../../contexts/UserContext";
import { RepositoryNodeModel } from "../../models/RepositoryNodeModel";

export const ListSection = () => {
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
        <Search
          handleSearch={() => {}}
          title="testing"
          button="fetch"
          isMain={false}
        />
        <List repositoryList={repositoryList} />
      </div>
    );
  }
};
