import React, { FC, useContext, useEffect, useState } from "react";
import { List } from "../../components/List";
import { Search, SearchEnum } from "../../components/Search";
import { UserContext } from "../../contexts/UserContext";
import { RepositoryNodeModel } from "../../models/RepositoryNodeModel";
import { MoonLoader } from "react-spinners";
import { filterRepositories } from "../../services/SearchService";
import { Profile } from "../../components/Profile";
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
        <div className="flex items-center justify-center mt-28">
          <MoonLoader loading={isLoading} color={COLOR} />
        </div>
      ) : (
        <>
          {currentUser && (
            <>
              <div className="flex h-screen overflow-y-scroll">
                <div className="flex-shrink-0 flex flex-col justify-center items-center  w-1/3 md:sticky top-0 h-screen overflow-y-auto">
                  <Profile user={currentUser} />
                </div>
                <div className="flex-1 overflow-y-auto md:px-5 px-12 max-w-screen-xl">
                  <Search
                    handleSearch={(value: string) => {
                      setValue(value);
                    }}
                    type={SearchEnum.secondary}
                  />
                  <List repositoryList={repositoryList} />
                </div>
              </div>
            </>
          )}
        </>
      )}
    </div>
  );
};
