import { Button } from 'antd';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { DECREMENT, INCREMENT } from './actions';

export const CounterDisplay = (props) => {
  const counter = useSelector((state) => state.counter);
  return (
    <div>
      <h2>counter: {counter.count}</h2>
    </div>
  );
};

export const CounterButtons = ({ increment, decrement }) => {
  const dispatch = useDispatch();
  return (
    <>
      <Button onClick={()=>dispatch({ type: INCREMENT })}>+</Button>
      <Button onClick={()=>dispatch({ type: DECREMENT })}>-</Button>
    </>
  );
};
