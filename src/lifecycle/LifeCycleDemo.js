import { Button, Space } from 'antd';
import React, { useEffect, useRef, useState } from 'react';
import { Counter } from './Counter';

export const LifeCycleDemo = () => {
  const [showCounter, setShowCounter] = useState(true);
  const [dummy, setDummy] = useState(true);
  const input = useRef(null);
  useEffect(() => {
    input.current.focus();  
  }, []);
  return (
    <div style={{ margin: 30 }}>
      <Space>
        <input ref={input} placeholder="write something"></input>
        <Button onClick={() => setShowCounter(!showCounter)}>
          {showCounter ? 'Hide counter' : 'Show Counter'}
        </Button>
        <Button onClick={() => setDummy(!dummy)}>SetDummy</Button>
      </Space>
      {showCounter ? <Counter dummy={dummy} /> : 'counter is hidden'}
    </div>
  );
};
