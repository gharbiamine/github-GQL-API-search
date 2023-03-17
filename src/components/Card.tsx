import React from "react";
import { RepositoryNodeModel } from "../models/RepositoryNodeModel";

interface CardProps {
  repository: RepositoryNodeModel;
}

export const Card = ({ repository }: CardProps) => {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{repository.name}</h5>
        <p className="card-text">{repository.description}</p>
        <div className="card-caption">{repository.updatedAt.toString()}</div>
      </div>
      <div className="card-footer">
        <div className="d-flex align-items-centrer justify-content-between">
          <div>
            <div className="badge badge-primary mr-1">
              {repository.stargazers.totalCount}
            </div>
            <div className="badge badge-primary mr-1">
              {repository.forks.totalCount}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
