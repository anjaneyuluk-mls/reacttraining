import React from 'react';
import { useSelector } from 'react-redux';

export const CounterDisplay = () => {
  const counter = useSelector((state) => state.counter);
  return <h1>currentcount : {counter.count}</h1>;
};
