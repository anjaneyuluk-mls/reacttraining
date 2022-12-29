import React from 'react';
import 'antd/dist/reset.css';
import './App.css';
import ListExample from './ListExample';
import { Layout, Tabs, Image, Typography, Col, Row, Space, Menu } from 'antd';
import styled from 'styled-components';
import AntdTable from './TableExample';
import MoviesForm from './Form';
import MyForm from './MyForm';
import { Outlet, useNavigate } from 'react-router-dom';
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
        <Row>
          <Col>
            <Space>
              <Image width={32} height={32} src="./logo192.png" />
              <Typography.Text style={{ color: 'white' }}>Codex</Typography.Text>
            </Space>
          </Col>
          <Col></Col>
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
            items={[{key:'Table', label: 'Table' }, { key:'Form',label: 'Form' }, {key:'List', label: 'List' }]}
          />
        </Sider>
        <Content style={{margin: 30}}>
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};
export default App;
