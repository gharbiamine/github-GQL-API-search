import React from "react";
import { RepositoryNodeModel } from "../models/RepositoryNodeModel";

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
        {repository.updatedAt.toString()}
      </div>

      <div className="flex items-centrer ">
        <div>
          <div className="inline-flex items-center text-blue-600 hover:underline">
            {repository.stargazers.totalCount}
          </div>
          <div className="inline-flex items-center text-blue-600 hover:underline">
            {repository.forks.totalCount}
          </div>
        </div>
      </div>
    </div>
  );
};
