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
      className="w-auto  my-8 p-6 bg-overaccent border border-secondary/50 rounded-md hover:shadow-md cursor-pointer"
      onClick={() => {
        openInNewTab(repository.url);
      }}
    >
      <div className="flex flex-col justify-between h-full font-poppins  break-all">
        <div className="flex items-center justify-between">
          <div className="mb-2 text-2xl font-semibold  text-primary ">
            {repository.name}
          </div>
          <div className="mb-2 text-md font-normal  text-secondary ">
            {getTimeElapsed(repository.updatedAt)}
          </div>
        </div>
        <p className="mb-2 text-lg font-light  text-primary ">
          {repository.description}
        </p>

        <div className="flex items-center justify-between w-full font-poppins">
          <div className="flex items-center justify-between w-28">
            <div className="flex space-x-2 text-primary  ">
              <span>{repository.stargazers.totalCount}</span>
              <img className="h-100" src={star} alt="git-star" />
            </div>
            <div className="flex space-x-2 text-primary  ">
              <span>{repository.forks.totalCount}</span>
              <img className="h-100 " src={fork} alt="git-fork" />
            </div>
          </div>
          {repository.primaryLanguage?.name && (
            <div className="px-2 py-1 text-sm font-semibold text-center text-white bg-accent rounded-md">
              {repository.primaryLanguage?.name}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
