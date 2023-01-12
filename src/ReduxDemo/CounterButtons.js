import { Button } from 'antd';
import React from 'react';
import { useDispatch } from 'react-redux';
import { DECREMENT, INCREMENT } from '../redux/actions';

export const CounterButtons = () => {
  const dispatch = useDispatch();
  return (
    <>
      <Button
        onClick={() => {
          dispatch({ type: INCREMENT, value: 2 });
        }}
      >
        +
      </Button>
      <Button
        onClick={() => {
          dispatch({ type: DECREMENT, value: 1 });
        }}
      >
        -
      </Button>
    </>
  );
};
