import React from 'react';
import { Provider } from 'react-redux';
import { CounterButtons } from './CounterButtons';
import { CounterDisplay } from './CounterDisplay';
import store from './store';

const Main = () => {
  return (
    <Provider store={store}>
      <CounterDisplay />
      <CounterButtons />
    </Provider>
  );
};

export default Main;
