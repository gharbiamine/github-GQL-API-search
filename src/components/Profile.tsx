import React, { FC } from "react";
import { getTimeElapsed } from "../utils/getTimeElapsed";
import star from "../assets/icons/git-star.svg";
import fork from "../assets/icons/git-fork.svg";
import { UserModel } from "../models/UserModel";

interface IProfileProps {
  user: UserModel;
}

export const Profile: FC<IProfileProps> = ({ user }) => {
  const openInNewTab = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };
  return (
    <div
      className="flex items-center justify-center p-6"
      onClick={() => {
        openInNewTab(user.url);
      }}
    >
      <div className="flex flex-col items-center justify-between h-full w-96 my-5 rounded-xl bg-secondary/10 hover:shadow-sm hover:shadow-primary cursor-pointer p-4 ">
        <div className="my-4">
          <img
            src={user.avatarUrl}
            alt="user-avatar"
            className="rounded-full object-contain h-64 w-64"
          />
        </div>
        <div className="mb-3 text-2xl font-bold tracking-tight text-primary font-poppins">
          {user.login}
        </div>
        {user.bio && (
          <>
            <div className="mb-3  text-lg font-normal text-center tracking-tight text-primary ">
              {user.bio}
            </div>
          </>
        )}

        <div className="flex items-center w-full justify-around mb-3">
          <div className="flex space-x-2 text-accent  ">
            <span>{user.followers.totalCount}</span>
            <span>followers</span>
          </div>
          <div className="flex space-x-2 text-accent  ">
            <span>{user.following.totalCount}</span>
            <span> following </span>
          </div>
        </div>

        {user.email && (
          <>
            <div className="mb-2 text-md font-light tracking-tight text-primary ">
              {user.email}
            </div>
          </>
        )}
      </div>
    </div>
  );
};
