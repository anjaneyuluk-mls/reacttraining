import { Spin } from 'antd';
import React, { createContext, useEffect, useState } from 'react';

export const UserContext = createContext({
  user: undefined,
});

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  let token = localStorage.getItem('token');
  useEffect(() => {
    if (token && !user) {
      fetch('http://localhost:3600/user')
        .then((res) => res.json())
        .then((data) => setUser(data));
    }
  }, []);
  return token && !user ? (
    <Spin spinning={true} />
  ) : (
    <UserContext.Provider value={[user, setUser]}>{children}</UserContext.Provider>
  );
};
