import { Button } from 'antd';
import React from 'react';

export const Counter = (props) => {
  return (
    <div>
      <h2>counter: {props.startValue}</h2>
    </div>
  );
};

export const CounterButtons = ({ increment, decrement }) => {
  return (
    <>
      <Button onClick={increment}>+</Button>
      <Button onClick={decrement}>-</Button>
    </>
  );
};
