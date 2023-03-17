import React, { createContext, useCallback, useState } from "react";
import { UserModel } from "../models/UserModel";

interface Props {
  children: React.ReactNode;
}
interface UserContextType {
  currentUser: UserModel | null;
  setCurrentUser: React.Dispatch<React.SetStateAction<UserModel | null>>;
}

export const UserContext = createContext<UserContextType>({
  currentUser: null,
  setCurrentUser: () => {},
});

export const UserProvider = ({ children }: Props) => {
  const [currentUser, setCurrentUser] = useState<UserModel | null>(null);

  const setContext = useCallback((updates : UserModel | null)=> setCurrentUser(updates),[currentUser, setCurrentUser]);
  const getContext = useCallback(
    () => currentUser
  , [currentUser, setCurrentUser])
  return (
    <UserContext.Provider value={{ currentUser, setCurrentUser }}>
      {children}
    </UserContext.Provider>
  );
};
