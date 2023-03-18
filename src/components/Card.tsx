import React, { FC } from "react";
import { RepositoryNodeModel } from "../models/RepositoryNodeModel";
import { getTimeElapsed } from "../utils/getTimeElapsed";
import star from "../assets/icons/git-star.svg";
import fork from "../assets/icons/git-fork.svg";

interface ICardProps {
  repository: RepositoryNodeModel;
}

export const Card: FC<ICardProps> = ({ repository }) => {
  const openInNewTab = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };
  return (
    <div
      className="w-4/5 my-8 p-6 bg-overaccent border border-secondary/50 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 cursor-pointer"
      onClick={() => {
        openInNewTab(repository.url);
      }}
    >
      <div className="flex flex-col justify-between h-full ">
        <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 ">
          {repository.name}
        </h5>
        <p className="mb-2 text-lg font-semibold tracking-tight text-gray-800 ">
          {repository.description}
        </p>

        <div className="flex items-center justify-between">
          <div className="flex items-start justify-between ">
            <div className="flex space-x-2 text-blue-600  ">
              <span>{repository.stargazers.totalCount}</span>
              <img className="h-100" src={star} alt="git-star" />
            </div>
            <div className="flex space-x-2 text-blue-600  ">
              <span>{repository.forks.totalCount}</span>
              <img className="h-100 " src={fork} alt="git-fork" />
            </div>
          </div>
          <div className="mb-2 text-md font-semibold tracking-tight text-gray-700 ">
            {getTimeElapsed(repository.updatedAt)}
          </div>
        </div>
      </div>
    </div>
  );
};
