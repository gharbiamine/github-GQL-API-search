import React, { FC } from "react";
import ContentLoader from "react-content-loader";

export const Loader: FC = () => {
  return (
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
  );
};
