import React, { FC, useContext, useEffect, useState } from "react";
import { List } from "../../components/List";
import { Search, SearchEnum } from "../../components/Search";
import { UserContext } from "../../contexts/UserContext";
import { RepositoryNodeModel } from "../../models/RepositoryNodeModel";
import { MoonLoader } from "react-spinners";
import { filterRepositories } from "../../services/SearchService";
import { Profile } from "../../components/Profile";
import arrowUp from "../../assets/icons/arrow-up.svg";
interface Props {
  isLoading: boolean;
}
const COLOR = "#0e1c36";

export const ListSection: FC<Props> = ({ isLoading }) => {
  const { currentUser } = useContext(UserContext);
  const [repositoryList, SetRepositoryList] = useState<RepositoryNodeModel[]>(
    []
  );
  const [showButton, setShowButton] = useState<boolean>(false);
  const [value, setValue] = useState<string>("");

  const handleScrollToTop = () => {
    window.scrollTo({
      behavior: "smooth",
      top: 0,
    });
  };

  /**

    Hook that handles the visibility of a button that allows the user to go back to the top search after scrolling down.
    @returns {void}
    */
  useEffect(() => {
    const handleScrollButtonVisibility = () => {
      window.scrollY > 300 ? setShowButton(true) : setShowButton(false);
    };
    window.addEventListener("scroll", handleScrollButtonVisibility);
    return () => {
      window.removeEventListener("scroll", handleScrollButtonVisibility);
    };
  }, []);

  /**

    Updates the repository list state based on the current user and search value.
    If a search value is provided, the repository list is filtered based on the name.
    If no search value is provided, the entire repository list is used.
    @param {Object} currentUser - The current user object.
    @param {UserModel} currentUser.repositories.nodes - The repository list of the current user.
    @param {string} value - The search value used to filter the repository list.
    @returns {void}
    */
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
              <div className="flex flex-col lg:flex-row h-full overflow-y-scroll  ">
                <div className="flex-shrink-0 flex flex-col mt-28 items-center lg:w-1/3 lg:sticky top-0 h-full lg:h-screen overflow-y-auto">
                  <Profile user={currentUser} />
                </div>
                <div className=" w-full max-w-screen-xl">
                  <div className="sticky top-0 md:my-4 my-8 px-5 md:px-12  ">
                    <Search
                      handleSearch={(value: string) => {
                        setValue(value);
                      }}
                      type={SearchEnum.secondary}
                    />
                  </div>
                  <div className="flex-1 overflow-y-auto md:px-12 px-5 max-h-screen">
                    <List repositoryList={repositoryList} />
                  </div>
                </div>
              </div>
            </>
          )}
          {showButton && (
            <div className="fixed bottom-10 right-10">
              <button
                className=" bg-accent hover:shadow-lg text-overaccent font-bold p-2 rounded-full"
                onClick={handleScrollToTop}
              >
                <img src={arrowUp} alt="go-up" />
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
};
