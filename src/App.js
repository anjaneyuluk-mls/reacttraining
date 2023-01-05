import { Col, Image, Layout, Menu, Row, Space, Typography } from 'antd';
import 'antd/dist/reset.css';
import React, { useContext } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import './App.css';
import { Profile } from './components/Profile';
import { UserContext } from './contexts/UserContext';
const { Header, Content, Sider } = Layout;
const Container = styled.div`
  margin: 30px;
`;

const App = () => {
  const navigate = useNavigate();
  
  const onMenuItemSelect = ({ item, key, keyPath, selectedKeys, domEvent }) => {
    console.log(item);
    switch (key) {
      case 'Table':
        navigate('/table');
        break;
      case 'Form':
        navigate('/form');
        break;
      case 'List':
        navigate('/list');
        break;
      default:
        break;
    }
  };
  return (
    <Layout>
      <Header>
        <Row fluid={true} justify={'space-between'}>
          <Col span={12}>
            <Space>
              <Image width={32} height={32} src="./logo192.png" />
              <Typography.Text style={{ color: 'white' }}>Codex</Typography.Text>
            </Space>
          </Col>
          <Col span={12}>
            <Row fluid={true} justify={'end'}>
              <Col>
                <Profile/>
              </Col>
            </Row>
          </Col>
        </Row>
      </Header>
      <Layout style={{ height: 'calc(100vh - 64px)' }}>
        <Sider>
          <Menu
            onSelect={onMenuItemSelect}
            mode="inline"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            style={{ height: '100%', borderRight: 0 }}
            items={[
              { key: 'Table', label: 'Table' },
              { key: 'Form', label: 'Form' },
              { key: 'List', label: 'List' },
            ]}
          />
        </Sider>
        <Content style={{ margin: 30 }}>
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};
export default App;
