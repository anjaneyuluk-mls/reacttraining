import React, { createContext, useState } from 'react';

export const UserContext = createContext({
  user: { name: 'no user' },
});

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({});
  return <UserContext.Provider value={[user, setUser]}>{children}</UserContext.Provider>;
};
