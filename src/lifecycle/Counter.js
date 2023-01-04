import { Button, Space, Typography } from 'antd';
import React, { useEffect, useState } from 'react';

export const Counter = ({ dummy }) => {
  const [count, setCount] = useState(0);
 
  useEffect(() => {
    console.log('I get called only on mount');
    return function () {
      console.log('I get called when the component is removed from the dom');
    };
  }, []);
  //   useEffect(() => {
  //     console.log('I get called on every re render');
  //   });
  //   useEffect(() => {
  //     console.log('I get called only whenever count changes');
  //   }, [count]);
  return (
    <div style={{ margin: 20 }}>
      <Space direction="vertical">
        <Typography.Title>{count}</Typography.Title>
        <Button onClick={() => setCount(count + 1)}>increment</Button>
      </Space>
    </div>
  );
};

//   useEffect(() => {
//     if (count < 20) {
//       setCount(count+1)
//     }
//     console.log('called after every render -- any state change or prop change');
//   });

//   useEffect(() => {
//     console.log('[] -- called on first mount');
//     return () => {
//       console.log('called on umnount -- removed from dom');
//     };
//   }, []);

//   useEffect(() => {
//     console.log('called on Dependency change - example dummy');
//   }, [dummy]);
