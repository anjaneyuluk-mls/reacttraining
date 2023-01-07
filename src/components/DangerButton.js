import React, { useState } from 'react';

export const DangerButton = ({ content, onDanger }) => {
  let counter = 0;
  function handleClick() {
    counter++;
    onDanger(counter);
  }
  return (
    <div onClick={handleClick} style={{ backgroundColor: 'red', width: 100, height: 55 }}>
      {content}
    </div>
  );
};
