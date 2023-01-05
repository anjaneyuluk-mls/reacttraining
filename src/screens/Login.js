import { Button, Form, Input, Spin } from 'antd';
import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { UserContext } from '../contexts/UserContext';

const Container = styled.div`
  margin: 24px;
  height: 500px;
  width: 400px;
  padding: 24px;
  border: 1px solid gray;
  border-radius: 10px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;
const FormItem = Form.Item;
export const Login = () => {
  const naviagte = useNavigate();
  const [user, setUser] = useContext(UserContext);
  const [loading, setLoading] = useState(false);
  const login = async (values) => {
    setLoading(true);
    try {
      const response = await fetch('http://localhost:3600/signIn', {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify(values),
      }).then((res) => res.json());
      console.log(response);
      if (response.message === 'sucess') {
        localStorage.setItem('token', response.token);
        setUser(response.user);
        setTimeout(() => {
          naviagte('/table');
        }, 100);
      } else {
        alert(response.statusText);
      }
    } catch (error) {}

    setLoading(false);
  };
  return (
    <Container>
      {loading ? (
        <Spin spinning={loading} />
      ) : (
        <Form onFinish={login} name="login-form">
          <FormItem name="username" label="User Name">
            <Input />
          </FormItem>
          <FormItem name="password" label="Password">
            <Input type="password" />
          </FormItem>
          <FormItem>
            <Button type="primary" htmlType="submit">
              Login
            </Button>
          </FormItem>
        </Form>
      )}
    </Container>
  );
};
