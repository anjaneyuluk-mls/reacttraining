import Typography from 'antd/es/typography/Typography';
import React, { useContext } from 'react';
import { UserContext } from '../contexts/UserContext';

export const Profile = () => {
  const [user] = useContext(UserContext);
  return <Typography.Title style={{ color: 'white' }}>{user.name}</Typography.Title>;
};
