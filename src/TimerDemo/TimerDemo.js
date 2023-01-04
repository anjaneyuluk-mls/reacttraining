import { Button, Space } from 'antd';
import Typography from 'antd/es/typography/Typography';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  margin: 24px;
`;
export const TimerDemo = () => {
  const [count, setTimer] = useState(0);
  let interVal = null;
  console.log('interval', interVal);
  useEffect(() => {
    console.log('re rendered');
  });
  const Start = () => {
    interVal = setInterval(() => {
      console.log('set Interval is working', count);
      setTimer((count) => count + 1);
    }, 2000);
  };
  const Stop = () => {
    clearInterval(interVal);
  };
  return (
    <Container>
      <Space>
        <Typography.Title>{count}</Typography.Title>
        <Button onClick={Start}>Start</Button>
        <Button onClick={Stop}>Stop</Button>
      </Space>
    </Container>
  );
};
