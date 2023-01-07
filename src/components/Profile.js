import { Avatar, Dropdown, List, Menu, Popover } from 'antd';
import Typography from 'antd/es/typography/Typography';
import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../contexts/UserContext';

export const Profile = () => {
  const [user] = useContext(UserContext);
  const nviagte = useNavigate();
  const items = [
    {
      key: 'profile',
      label: 'Profile',
      onClick: () => {
        nviagte('/profile');
      },
    },
    {
      key: 'logout',
      label: 'Logout',
      onClick: () => {
        localStorage.removeItem('token');
        nviagte('/signIn');
      },
    },
  ];
  let content = <Menu style={{border:'none'}} items={items}/>
  return (
    <Popover placement="bottomRight" content={content}>
      <Avatar style={{ color: 'white', backgroundColor: 'green' }}>{user.name[0]}</Avatar>
    </Popover>
  );
};
