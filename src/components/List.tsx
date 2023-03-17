import React, { useContext, useMemo } from "react";

import { UserContext } from "../contexts/UserContext";
import { Card } from "./Card";

export const List = () => {
  const { currentUser } = useContext(UserContext);

  const list = useMemo(() => {
    console.log(currentUser);
    return currentUser?.repositories.nodes.map((node, index) => {
      return <Card repository={node} key={index} />;
    });
  }, [currentUser]);
  return <div>{list}</div>;
};
