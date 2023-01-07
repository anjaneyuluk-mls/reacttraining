import { Button, Space } from 'antd';
import Typography from 'antd/es/typography/Typography';
import React, { useReducer } from 'react';

const myReducer = function (state, action) {
  switch (action.type) {
    case 'Increment':
      return { count: state.count + action.payload };
    case 'Decrement':
      return { count: state.count - action.payload };
    default:
      return { count: 0 };
  }
};

export const RCounter = () => {
  const [state, dispatch] = useReducer(myReducer, { count: 0 });
  return (
    <div>
      <Space direction="vertical">
        <Typography.Title>{state.count}</Typography.Title>
        <Button onClick={() => dispatch({ type: 'Increment', payload: 1 })}>Increment</Button>
        <Button onClick={() => dispatch({ type: 'Decrement', payload: 1 })}>Decrement</Button>
      </Space>
    </div>
  );
};
