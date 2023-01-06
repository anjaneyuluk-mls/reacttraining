import { Avatar, Dropdown } from 'antd';
import Typography from 'antd/es/typography/Typography';
import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../contexts/UserContext';

export const Profile = () => {
  const [user] = useContext(UserContext);
  const nviagte = useNavigate();
  const menuProps = {
    items: [
      {
        key: 'logout',
        label: 'Logout',
      },
    ],
    onClick: () => {
      console.log('we are here');
      localStorage.removeItem('token');
      nviagte('/signIn');
    },
  };
  return (
    <Dropdown.Button menu={menuProps} placement="bottom">
      {user.name && user.name[0]}
    </Dropdown.Button>
  );
};
