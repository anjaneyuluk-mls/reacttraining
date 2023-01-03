import { Button } from 'antd';
import React, { useState } from 'react';

export const Counter = (props) => {
  let [counter, setCounter] = useState();
  function increment() {
    setCounter(counter + 1);
  }
  return (
    <div>
      <h2>{props.startValue}</h2>
      <Button onClick={increment}>increment</Button>
    </div>
  );
};
