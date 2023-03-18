import React, { FC, useContext, useEffect, useRef, useState } from "react";
import { Search, SearchEnum } from "../components/Search";
import { UserContext } from "../contexts/UserContext";
import { UserModel } from "../models/UserModel";
import { getRepositories } from "../services/SearchService";
import { ListSection } from "./sections/ListSection";

export const LandingPage: FC = () => {
  const { setCurrentUser } = useContext(UserContext);
  const [loading, setLoading] = useState<boolean>(false);
  const listReference = useRef<HTMLDivElement>(null);
  useEffect(() => {
    window.scrollTo({
      behavior: "smooth",
      top: listReference.current?.offsetTop,
    });
  }, [loading]);

  const handleUsernameSearch = (username: string) => {
    setLoading(true);
    getRepositories(username)
      .then((user: UserModel) => {
        setCurrentUser(user);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div>
      <Search
        handleSearch={handleUsernameSearch}
        title="Github search"
        description="Search for a github user and see their "
        button="Fetch"
        feature="respositories"
        type={SearchEnum.main}
      />
      <div ref={listReference}>
        <ListSection isLoading={loading} />
      </div>
    </div>
  );
};
