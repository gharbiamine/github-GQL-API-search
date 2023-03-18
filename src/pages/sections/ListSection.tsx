import React, { FC, useContext, useEffect, useMemo, useState } from "react";
import { List } from "../../components/List";
import { Search, SearchEnum } from "../../components/Search";
import { UserContext } from "../../contexts/UserContext";
import { RepositoryNodeModel } from "../../models/RepositoryNodeModel";
import { MoonLoader } from "react-spinners";
import { filterRepositories } from "../../services/SearchService";
interface Props {
  isLoading: boolean;
}
export const ListSection: FC<Props> = ({ isLoading }) => {
  const COLOR = "#0e1c36";
  const { currentUser } = useContext(UserContext);
  const [repositoryList, SetRepositoryList] = useState<RepositoryNodeModel[]>(
    []
  );
  const [value, setValue] = useState("");
  useEffect(() => {
    SetRepositoryList(
      value
        ? filterRepositories(currentUser?.repositories.nodes!, value)
        : currentUser?.repositories.nodes!
    );
  }, [currentUser, value]);

  return (
    <div className="listSection">
      {isLoading ? (
        <div className="flex items-center justify-center">
          <MoonLoader loading={isLoading} color={COLOR} />
        </div>
      ) : (
        <>
          {currentUser && (
            <Search
              handleSearch={(value: string) => {
                setValue(value);
              }}
              title="Filter through repositories"
              button="fetch"
              description="placeholder"
              type={SearchEnum.secondary}
            />
          )}

          <List repositoryList={repositoryList} />
        </>
      )}
    </div>
  );
};
