import React, { useContext } from 'react';
import { UserContext } from '../contexts/UserContext';

export const ProfilePage = () => {
  const [user] = useContext(UserContext);

  return <div>{user.name}</div>;
};
