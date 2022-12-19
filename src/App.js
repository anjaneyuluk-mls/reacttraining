import React from 'react';
import 'antd/dist/reset.css';
import './App.css';
import ListExample from './ListExample';
import { Tabs } from 'antd';
import styled from 'styled-components';

const Container = styled.div`
  margin: 30px;
`;
const App = () => (
  <Container>
    <Tabs
      defaultActiveKey="1"
      items={[
        {
          label: `List`,
          key: '1',
          children: <ListExample />,
        },
        {
          label: `Table`,
          key: '2',
          children: `todo table`,
        },
        {
          label: `form`,
          key: '3',
          children: `todo form`,
        },
      ]}
    />
  </Container>
);
export default App;
