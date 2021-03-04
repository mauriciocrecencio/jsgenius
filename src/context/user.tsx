import React, { createContext, useState } from "react";
import { User } from "../interfaces/User";
const UserContext = createContext(undefined);

// eslint-disable-next-line react/prop-types
export const UserProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<User>({
    name: null,
    score: -1,
  });
  const values = { user, setUser };
  return <UserContext.Provider value={values}>{children}</UserContext.Provider>;
};

export default UserContext;
