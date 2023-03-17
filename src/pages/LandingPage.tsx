import React, { FC, useContext, useEffect, useState } from "react";
import { Search } from "../components/Search";
import { UserContext } from "../contexts/UserContext";
import { UserModel } from "../models/UserModel";
import { getRepositories } from "../services/SearchService";
import { ListSection } from "./sections/ListSection";

export const LandingPage: FC = () => {
  const { currentUser, setCurrentUser } = useContext(UserContext);
  const [loading, setLoading] = useState<boolean>(true);
  const handleUsernameSearch = (username: string) => {
    getRepositories(username)
      .then((user: UserModel) => {
        setCurrentUser(user);
      })
      .catch((error) => {
        console.log(error);
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
      <ListSection />
    </div>
  );
};