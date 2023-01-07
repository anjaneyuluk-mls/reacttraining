import { Result, Spin } from 'antd';
import React, { createContext, useEffect, useState } from 'react';
import { axiosInstance } from '../services/axios';

export const UserContext = createContext({
  user: undefined,
});

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem('token'));
  const [error, setErrror] = useState(null);
  // const navigate = useNavigate();
  useEffect(() => {
    console.log('hello', { user });
    if (token && !user) {
      axiosInstance
        .get('user')
        .then((res) => {
          setUser(res.data);
        })
        .catch((err) => {
          console.log(err);
          setErrror(err);
        });
    }
  }, []);
  return error ? (
    <Result title={error.title} status={error.response.status}></Result>
  ) : token && !user ? (
    <Spin spinning={true} />
  ) : (
    <UserContext.Provider value={[user, setUser]}>{children}</UserContext.Provider>
  );
};
