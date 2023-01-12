import React from 'react';
import styled from 'styled-components';
import { CounterButtons, CounterDisplay } from './Counter';
import { Provider } from 'react-redux';
import store from './store';
const Container = styled.div`
  margin: 24px;
`;
export const ReduxDemo = () => {
  return (
    <Provider store={store}>
      <Container>
        <CounterDisplay />
        <CounterButtons />
      </Container>
    </Provider>
  );
};
