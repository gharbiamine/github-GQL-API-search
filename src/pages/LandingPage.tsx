import React, { FC, useContext, useEffect, useRef, useState } from "react";
import { Search, SearchEnum } from "../components/Search";
import { UserContext } from "../contexts/UserContext";
import { UserModel } from "../models/UserModel";
import { getRepositories } from "../services/SearchService";
import { ListSection } from "./sections/ListSection";
import { toast, ToastContainer } from "react-toastify";
import { Loader } from "../components/Loader";

export const LandingPage: FC = () => {
  const { currentUser, setCurrentUser } = useContext(UserContext);
  const [loading, setLoading] = useState<boolean>(false);

  const listReference = useRef<HTMLDivElement>(null);

  /**

    Scrolls to the list of elements with a smooth transition after a user is fetched from the api.
    @param {Object} currentUser - The current user object.
    @param {React.RefObject} listReference - A reference to the list element to scroll to.
    @returns {undefined}
    */
  useEffect(() => {
    if (currentUser === null) return;
    setTimeout(() => {
      window.scrollTo({
        behavior: "smooth",
        top: listReference.current?.offsetTop,
      });
    }, 100);
  }, [currentUser]);

  /**

    Handles searching for a user's repositories based on their username.
    @param {string} username - The username of the user to search for.
    @returns {void}
    */
  const handleUsernameSearch = (username: string) => {
    setLoading(true);
    getRepositories(username)
      .then((user: UserModel) => {
        user === null ? toast.warn("user not found") : setCurrentUser(user);
      })
      .catch((error) => {
        console.log(error);
        toast.warn("Request timed out, please try again later!");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div data-testid="landing-page">
      <ToastContainer />
      <Search
        handleSearch={handleUsernameSearch}
        title="Github search"
        description="Search for a github user and see their most recent "
        button="Fetch"
        feature="respositories"
        type={SearchEnum.primary}
      />
      {currentUser === null && <Loader />}
      <div ref={listReference}>
        <ListSection isLoading={loading} />
      </div>
    </div>
  );
};
