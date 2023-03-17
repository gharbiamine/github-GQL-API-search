import React, { useContext, useEffect } from "react";
import { List } from "../components/List";
import { Search } from "../components/Search";
import { UserContext, UserProvider } from "../contexts/UserContext";
import { UserModel } from "../models/UserModel";
import { getRepositories } from "../services/SearchService";

export const LandingPage = () => {
  const { currentUser, setCurrentUser } = useContext(UserContext);
  const handleUsernameSearch = (username: string) => {
    getRepositories(username)
      .then((user: UserModel) => {
        console.log(user);
        setCurrentUser(user);
        console.log(currentUser);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => console.log(currentUser), [currentUser]);
  return (
    <div>
      <UserProvider>
        <Search
          handleSearch={handleUsernameSearch}
          title="Get github repositories by username"
          button="Fetch"
        />
        <List />
      </UserProvider>
    </div>
  );
};
