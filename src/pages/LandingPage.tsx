import React, { FC, useContext, useEffect, useRef, useState } from "react";
import { Search, SearchEnum } from "../components/Search";
import { UserContext } from "../contexts/UserContext";
import { UserModel } from "../models/UserModel";
import { getRepositories } from "../services/SearchService";
import { ListSection } from "./sections/ListSection";
import ContentLoader from "react-content-loader";
import { toast, ToastContainer } from "react-toastify";

export const LandingPage: FC = () => {
  const { currentUser, setCurrentUser } = useContext(UserContext);
  const [loading, setLoading] = useState<boolean>(false);
  const listReference = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (currentUser === null) return;
    setTimeout(() => {
      window.scrollTo({
        behavior: "smooth",
        top: listReference.current?.offsetTop,
      });
    }, 100);
  }, [currentUser]);

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
    <div>
      <ToastContainer />

      <Search
        handleSearch={handleUsernameSearch}
        title="Github search"
        description="Search for a github user and see their most recent "
        button="Fetch"
        feature="respositories"
        type={SearchEnum.main}
      />
      {currentUser === null && (
        <div className="md:block hidden">
          <ContentLoader
            speed={2}
            viewBox="0 0 400 160"
            backgroundColor="#d9d9d9"
            foregroundColor="#ededed"
            className="bg-secondary/10"
          >
            {" "}
            <rect x="100" y="6" rx="4" ry="4" width="280" height="40" />
            <rect x="10" y="30" rx="4" ry="4" width="80" height="90" />
            <rect x="100" y="55" rx="4" ry="4" width="280" height="40" />
            <rect x="100" y="104" rx="4" ry="4" width="280" height="40" />
          </ContentLoader>
        </div>
      )}
      <div ref={listReference}>
        <ListSection isLoading={loading} />
      </div>
    </div>
  );
};
