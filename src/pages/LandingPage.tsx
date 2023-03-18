import React, { FC, useContext, useEffect, useState } from "react";
import { Search } from "../components/Search";
import { UserContext } from "../contexts/UserContext";
import { UserModel } from "../models/UserModel";
import { getRepositories } from "../services/SearchService";
import { ListSection } from "./sections/ListSection";

export const LandingPage: FC = () => {
  const { currentUser, setCurrentUser } = useContext(UserContext);
  const [loading, setLoading] = useState<boolean>(false);
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
        title="Get github repositories by username"
        button="Fetch"
        isMain={true}
      />
      <ListSection isLoading={loading} />
    </div>
  );
};
