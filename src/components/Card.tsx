import React from "react";
import { RepositoryNodeModel } from "../models/RepositoryNodeModel";
import { getTimeElapsed } from "../utils/getTimeElapsed";
import star from "../assets/git-star.svg";
import fork from "../assets/git-fork.svg";

interface CardProps {
  repository: RepositoryNodeModel;
}

export const Card = ({ repository }: CardProps) => {
  return (
    <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
        {repository.name}
      </h5>
      <p className="mb-2 text-xl font-semibold tracking-tight text-gray-800 dark:text-white">
        {repository.description}
      </p>
      <div className="mb-2 text-md font-semibold tracking-tight text-gray-700 dark:text-white">
        {getTimeElapsed(repository.updatedAt)}
      </div>

      <div className="flex items-centrer ">
        <div className="inline-flex items-center text-blue-600 hover:underline">
          <span>{repository.stargazers.totalCount}</span>
          <img className="h-100" src={star} alt="git-star" />
        </div>
        <div className="inline-flex items-center justify-between text-blue-600 hover:underline">
          <span>{repository.forks.totalCount}</span>
          <img className="h-100" src={fork} alt="git-fork" />
        </div>
      </div>
    </div>
  );
};
